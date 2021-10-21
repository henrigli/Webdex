import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  export const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache()
    });
  
  export const SEARCH_QUERY = gql`
  query Query($filter: String){
    pokemon_search(filter: $filter){
      id
      name
      types
      height
      weight
      description
    }
  }  
  `;