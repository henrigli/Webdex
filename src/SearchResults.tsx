import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { client, SEARCH_QUERY } from "./services/graphql";

const Loading = () => {
  return <div>Loading...</div>
};

const Error = () => {
  return <div>Error :'(</div>
};

export const SearchResults = () => {
  const _filter = "chu";

  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: {filter: _filter}
  });

  if (loading) return Loading();
  if (error) return Error();

  return (
    <div>
      <Grid
        h="200px"
        templateColumns="repeat(auto-fit, minmax(200px, 1fr)"
        gap={4}
      >
        {data.pokemon_search.map((p: any) => {
          return (
            <GridItem colSpan={1}>
              <Box maxW="sm" borderWidth="1px" borderRadius="lg">
               {p.name}
              </Box>
            </GridItem>);
        })}

      </Grid>
    </div>
  );
};
