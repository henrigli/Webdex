import { Box, Grid, GridItem } from "@chakra-ui/react";
import { SearchResults } from "./SearchResults";

export const PageContent = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem colSpan={1}>
        {/* <Filterbox /> */}
        <Box maxW="sm" borderWidth="1px" borderRadius="lg">
          Filter
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <SearchResults />
      </GridItem>
    </Grid>
  );
};
