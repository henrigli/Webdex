const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

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
    hello: String,
    world: String,
    pokemon(id: Int): [Pokemon],
    pokemon_search(filter: String): [Pokemon],
    one_pokemon(id: Int): Pokemon
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello, world!";
  },
  world: () => {
    return "World, hello!";
  },
  pokemon: (args) => {
    //console.log(args, "\n\n=========================\n\n", info);
    return pokeList.filter((p) => p.id == args.id);
  },
  pokemon_search: (args) => {
    return pokeList.filter((p) => p.name.includes(args.filter));
  },
  one_pokemon: (args) => {
    return pokeList.filter((p) => p.id == args.id)[0];
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
