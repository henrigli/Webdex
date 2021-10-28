import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { client, Pokemon, SEARCH_QUERY } from "../services/graphql";
import PokemonContainer from "./PokemonContainer";

export const SearchResults = () => {
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: "",
      skip: 0,
      limit: 24,
    }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={2}>
        {data.pokemon_search.map((p: Pokemon) => <PokemonContainer pokemon={p}/>)}
      </Grid>
  );
};

const PokemonCard = (props: {pokemon: Pokemon}) => {
  return (
    <GridItem colSpan={3}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg">
      <p>#{props.pokemon.id}: {props.pokemon.name}</p>
      <p>{props.pokemon.types.join(", ")}</p>
      <p>Height: {props.pokemon.height} m &mdash; Weight : {props.pokemon.weight} kg</p>
      <p><em>{props.pokemon.description || "This is a Pokémon!"}</em></p>
      </Box>
    </GridItem>
  );
}

const Loading = () => {
  return <div>Loading...</div>
};

const Error = (props: {error: any}) => {
  console.log(props.error);

  return <div>Error :'(</div>
};
