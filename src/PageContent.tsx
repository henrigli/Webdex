import { Box, Grid, GridItem } from "@chakra-ui/react";
import { SearchResults } from "./SearchResults";

export const PageContent = () => {
  return (
    <Grid
      h="150px"
      templateRows="repeat(1, 2fr)"
      templateColumns="repeat(2, 2fr)"
      gap={4}>
     
      <GridItem colSpan={3}>
        <SearchResults />
      </GridItem>
    </Grid>
  );
};  