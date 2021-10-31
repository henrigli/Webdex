import { Box, Grid, GridItem, propNames } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { client, Pokemon, SEARCH_QUERY } from "../services/graphql";
import PokemonContainer from "./PokemonContainer";
import {
  selectFilter,
  selectMaxWeight,
  selectMinWeight,
  useAppSelector,
} from "../features/store";

export const SearchResults = () => {
  const filter = useAppSelector(selectFilter);
  const minWeight = useAppSelector(selectMinWeight);
  const maxWeight = useAppSelector(selectMaxWeight);

  console.log(filter);
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: filter,
      weight_gte: minWeight, // min weight
      weight_lte: maxWeight, //max weight
      skip: 0,
      limit: 24,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={2}
    >
      {data.pokemon_search.map((p: Pokemon) => (
        <PokemonContainer pokemon={p} />
      ))}
    </Grid>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Error = (props: { error: any }) => {
  console.log(props.error);

  return <div>Error :'(</div>;
};
