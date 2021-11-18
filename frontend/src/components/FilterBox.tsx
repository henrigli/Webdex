import { Container, Flex, Heading } from "@chakra-ui/react";
import { WeightSlider } from "./WeightSlider";
import { SearchBar } from "./SearchBar";

export const FilterBox = () => {
  return (
    <Flex p={4} pos="sticky" w="100%" overflow="hidden">
      <Container>
        <Heading align="left">Filter</Heading>
        <WeightSlider />
        <SearchBar />
      </Container>
    </Flex>
  );
};
