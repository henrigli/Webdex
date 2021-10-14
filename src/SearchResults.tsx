import { Box, Grid, GridItem } from "@chakra-ui/react";

export const SearchResults = () => {
  return (
    <div>
      <Grid
        h="200px"
        templateColumns="repeat(auto-fit, minmax(200px, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            Pokémon
          </Box>
          {/* <PokémonContainer /> */}
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            Pokémon
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg">
            Pokémon
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
