import { Container, Flex, Heading } from "@chakra-ui/react";
import { HeightSlider } from "./HeightSlider";
import { TypeCheckboxes } from "./TypeCheckboxes";

export const FilterBox = () => {
  return (
    <Flex pos="sticky">
      <Container>
        <Heading align="left">Filter</Heading>
        <HeightSlider />
        <TypeCheckboxes />
      </Container>
    </Flex>
  );
};
