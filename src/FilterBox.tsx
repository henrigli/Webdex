import { Container, Flex, Heading } from "@chakra-ui/react";
import { HeightSlider } from "./HeightSlider";
import { TypeCheckboxes } from "./TypeCheckboxes";
import { SearchBar } from "./SearchBar";

export const FilterBox = () => {
  return (
    <Flex p={4} pos="sticky" w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Container>
        <Heading align="left">Filter</Heading>
        <HeightSlider />
        <TypeCheckboxes />
        <SearchBar />
      </Container>
    </Flex>
  );
};
