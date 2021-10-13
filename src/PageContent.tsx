import { Box } from "@chakra-ui/react";
import { SearchResults } from "./SearchResults";

export const PageContent = () => {
  return (
    <div className="wrapper">
      <div className="filter">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" px={3} h={400}>
          Input
        </Box>
      </div>
      <div className="searchResults">
        <SearchResults />
      </div>
    </div>
  );
};
