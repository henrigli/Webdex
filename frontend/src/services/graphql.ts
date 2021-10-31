import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export interface Pokemon {
  id: number;
  name: String;
  types: String[];
  height: number;
  weight: number;
  description: String;
}

export interface User {
  id: String;
  name: String;
}

// http://it2810-06.idi.ntnu.no/
export const client = new ApolloClient({
  uri: "http://it2810-06.idi.ntnu.no/graphql",
  // uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(),
});

export const FIND_ONE = gql`
  query Query($id: Int) {
    pokemon(id: $id) {
      id
      name
      types
      height
      weight
      description
    }
  }
`;

export const FIND_USER = gql`
  query Query($name: String) {
    user(name: $name) {
      name
    }
  }
`;

export const GET_FAVORITES = gql`
  query Query($name: String) {
    user(name: $name) {
      favorites
    }
  }
`;

export const POST_USER = gql`
  mutation Mutation($name: String) {
    createUser(name: $name) {
      user {
        name
      }
      errors {
        message
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  query Query(
    $filter: String
    $type: String
    $height_lte: Int
    $height_gte: Int
    $weight_lte: Int
    $weight_gte: Int
    $skip: Int
    $limit: Int
    $sort: String
  ) {
    pokemon_search(
      filter: $filter
      type: $type
      height_lte: $height_lte
      height_gte: $height_gte
      weight_lte: $weight_lte
      weight_gte: $weight_gte
      skip: $skip
      limit: $limit
      sort: $sort
    ) {
        pokemon {
        id
        name
        types
        height
        weight
        description
        }
        count
      }
  }
`;
