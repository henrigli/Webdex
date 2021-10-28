import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Pokemon from "./pokemon";
import { User } from "./User";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Pokemon {
  id: Int,
  name: String,
  height: Float,
  weight: Float,
  types: [String],
  description: String,
},

type User {
  name: String,
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
    ): [Pokemon],

}

type Mutation {
  createUser(name: String) : User
}
`);

// The root provides a resolver function for each API endpoint
const root = {
  pokemon: async (args) => {
    return await Pokemon.findOne({ _id: args.id });
  },
  pokemon_search: async (args) => {
    let query = Pokemon.find({ name: new RegExp(args.filter, "i") });

    if (args.type) query.where({ types: args.type });
    if (args.height_lte) query.where("height").lte(args.height_lte);
    if (args.height_gte) query.where("height").gte(args.height_gte);
    if (args.weight_lte) query.where("weight").lte(args.weight_lte);
    if (args.weight_gte) query.where("weight").gte(args.weight_gte);

    query.setOptions({ skip: args.skip, limit: args.limit });
    query.sort(args.sort || "_id");

    console.log(query);
    return await query.exec();
  },
  user: async (args) => {
    return await User.findOne({ name: args.name });
  },
  createUser: async (input) => {
    console.log(input, input.name);
    const user = await new User(input).save((err) => console.log(err));
    return await User.findOne({ name: input.name });
  },
};

var app = express();
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
