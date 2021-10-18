import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const pokeList = [
  { id: 1, name: "Bulbasaur" },
  { id: 2, name: "Ivysaur" },
  { id: 3, name: "Venusaur" },
  { id: 4, name: "Squirtle" },
  { id: 5, name: "Wartortle" },
  { id: 6, name: "Blastoise" },
  { id: 7, name: "Charmander" },
  { id: 8, name: "Charmeleon" },
  { id: 9, name: "Charizard" },
];

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Pokemon {
  id: Int,
  name: String
},

type Query {
  pokemon(id: Int): Pokemon,
  pokemon_search(filter: String): [Pokemon],
}
`);

// The root provides a resolver function for each API endpoint
const root = {
  pokemon: async (args) => {
    return await pokeList.find(p => p.id == args.id);
  },
  pokemon_search: async (args) => {
    return await pokeList.filter(p => p.name.includes(args.filter));
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
