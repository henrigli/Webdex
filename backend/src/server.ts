import * as express from "express";
import * as cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Pokemon from "./pokemon";
import { User } from "./User";
import { userInfo } from "os";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Pokemon {
  id: Int,
  name: String,
  height: Float,
  weight: Float,
  types: [String],
  description: String,
  favorites: Int,
},

type PokemonSearchResult {
  pokemon: [Pokemon],
  count: Int,
}

type User {
  name: String,
  favorites: [Int],
}

type Query {
  user(name: String): User,

  pokemon(id: Int): Pokemon,

  pokemon_search(
    filter: String,
    type: String,
    height_lte: Int,
    height_gte: Int,
    weight_lte: Int,
    weight_gte: Int,
    skip: Int,
    limit: Int,
    sort: String,
    ): PokemonSearchResult,

}

type UserError {
  message: String
}

type createUserPayload {
  user: User,
  errors: [UserError],
}

type Mutation {
  createUser(name: String): createUserPayload,
  addFavorite(name: String, id: Int): String,
  removeFavorite(name: String, id: Int): String,
}
`);

// The root provides a resolver function for each API endpoint
const root = {
  pokemon: async (args) => {
    return await Pokemon.findOne({ _id: args.id });
  },
  pokemon_search: async (args) => {
    const count = await buildQuery(args).countDocuments();

    const query = buildQuery(args);
    query.setOptions({ skip: args.skip, limit: args.limit });
    query.sort(args.sort || "_id");

    //let count = await Pokemon.count(query.getOptions());
    const result = await query.exec();
    return {pokemon: result, count:count};
  },
  user: async (args) => {
    console.log((await User.findOne({ name: args.name })).favorites);

    return await User.findOne({ name: args.name });
  },
  createUser: async (input) => {
    console.log(input, input.name);

    // Thanks to https://productionreadygraphql.com/2020-08-01-guide-to-graphql-errors
    if (await User.findOne({ name: input.name })) {
      return {
        user: null,
        errors: [{ message: `Username ${input.name} is already taken.` }],
      };
    }

    const user = await new User(input).save((err) => console.log(err));

    // Compensate for cases where creation method returns before new user
    // can be retrieved
    await new Promise((resolve) => setTimeout(resolve, 1000)); // this is incredibly
    // no bueno and we have no idea why we need to do this, but it works for some reason...🤡

    const newUser = await User.findOne({ name: input.name });

    return { user: newUser, errors: [] };
  },
  // add pokemon object to user favorites list
  addFavorite: async (input) => {
    const user = User.findOne({ name: input.name });

    await User.updateOne(
      { name: input.name },
      { $addToSet: { favorites: input.id } }
    );

    // increment counter for # of favorites.
    Pokemon.updateOne({ id: input.id }, { $inc: { favorites: 1 } });
    return "Added favorite";
  },
  removeFavorite: async (input) => {
    await User.updateOne(
      { name: input.name },
      { $pull: { favorites: input.id } }
    );
    return "Removed favorite";
  },
};

const buildQuery = (args) => {
  let query = Pokemon.find({ name: new RegExp(args.filter, "i") });

  if (args.type) query.where({ types: args.type });
  if (args.height_lte) query.where("height").lte(args.height_lte);
  if (args.height_gte) query.where("height").gte(args.height_gte);
  if (args.weight_lte) query.where("weight").lte(args.weight_lte);
  if (args.weight_gte) query.where("weight").gte(args.weight_gte);

  return query;
};

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
