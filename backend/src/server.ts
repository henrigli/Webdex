import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import Pokemon from './pokemon';

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

type Query {
  pokemon(id: Int): Pokemon,
  pokemon_search(filter: String): [Pokemon],
}
`);

// The root provides a resolver function for each API endpoint
const root = {
  pokemon: async (args) => {
    return await Pokemon.findOne({_id: args.id});
  },
  pokemon_search: async (args) => {
    return await Pokemon.find({name: new RegExp(args.filter, "i")});
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
