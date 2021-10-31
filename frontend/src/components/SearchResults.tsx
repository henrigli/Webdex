import { Grid, HStack, Text, Spacer, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useQuery } from "@apollo/client";
import { client, Pokemon, SEARCH_QUERY } from "../services/graphql";
import PokemonContainer from "./PokemonContainer";
import {
  selectFilter,
  selectMaxWeight,
  selectMinWeight,
  selectSort,
  selectSkip,
  selectLimit,
  useAppSelector,
  prevPage,
  nextPage,
} from "../features/store";
import { SortDropdownMenu } from "./SortDropdownMenu";
import { useAppDispatch } from "../app/hooks";

export const SearchResults = () => {
  const filter = useAppSelector(selectFilter);
  const minWeight = useAppSelector(selectMinWeight);
  const maxWeight = useAppSelector(selectMaxWeight);
  const sort = useAppSelector(selectSort);
  const skip = useAppSelector(selectSkip);
  const limit = useAppSelector(selectLimit);

  const dispatch = useAppDispatch();

  console.log(filter);
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {
      filter: filter,
      weight_gte: minWeight, // min weight
      weight_lte: maxWeight, //max weight
      skip: skip,
      limit: limit,
      sort: sort,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <HStack mb={4}>
        <SortDropdownMenu />
        <Spacer />
        <IconButton aria-label="Previous page" icon={<ArrowBackIcon />} onClick={() => dispatch(prevPage())}> Prev </IconButton>
        <Text fontSize="xl" >Viewing {skip + 1}-{Math.min(skip + limit, data.pokemon_search.count)} of {data.pokemon_search.count} Pokémon</Text>
        <IconButton aria-label="Next page" icon={<ArrowForwardIcon />} onClick={() => dispatch(nextPage())}> Next </IconButton>
      </HStack>

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {data.pokemon_search.pokemon.map((p: Pokemon) => (
          <PokemonContainer pokemon={p} />
        ))}
      </Grid>
    </>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Error = (props: { error: any }) => {
  console.log(props.error);

  return <div>Error :'(</div>;
};
