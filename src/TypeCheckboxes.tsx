import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Grid,
} from "@chakra-ui/react";

export const TypeCheckboxes = () => {
  return (
    <Accordion allowToggle pb={4}>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Type
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={3}>
            <Checkbox colorScheme="teal">Normal</Checkbox>
            <Checkbox colorScheme="teal">Fire</Checkbox>
            <Checkbox colorScheme="teal">Water</Checkbox>
            <Checkbox colorScheme="teal">Grass</Checkbox>
            <Checkbox colorScheme="teal">Electric</Checkbox>
            <Checkbox colorScheme="teal">Ice</Checkbox>
            <Checkbox colorScheme="teal">Fighting</Checkbox>
            <Checkbox colorScheme="teal">Poison</Checkbox>
            <Checkbox colorScheme="teal">Ground</Checkbox>
            <Checkbox colorScheme="teal">Flying</Checkbox>
            <Checkbox colorScheme="teal"> Psychic</Checkbox>
            <Checkbox colorScheme="teal">Bug</Checkbox>
            <Checkbox colorScheme="teal">Rock</Checkbox>
            <Checkbox colorScheme="teal">Ghost</Checkbox>
            <Checkbox colorScheme="teal">Dark</Checkbox>
            <Checkbox colorScheme="teal">Dragon</Checkbox>
            <Checkbox colorScheme="teal">Steel</Checkbox>
            <Checkbox colorScheme="teal">Fairy</Checkbox>
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
