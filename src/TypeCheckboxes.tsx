import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  VStack,
} from "@chakra-ui/react";

export const TypeCheckboxes = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Type
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <VStack spacing={1} align="stretch">
            <Checkbox>Normal</Checkbox>
            <Checkbox>Fire</Checkbox>
            <Checkbox>Water</Checkbox>
            <Checkbox>Grass</Checkbox>
            <Checkbox>Electric</Checkbox>
            <Checkbox>Ice</Checkbox>
            <Checkbox>Fighting</Checkbox>
            <Checkbox>Poison</Checkbox>
            <Checkbox>Ground</Checkbox>
            <Checkbox>Flying</Checkbox>
            <Checkbox>Psychic</Checkbox>
            <Checkbox>Bug</Checkbox>
            <Checkbox>Rock</Checkbox>
            <Checkbox>Ghost</Checkbox>
            <Checkbox>Dark</Checkbox>
            <Checkbox>Dragon</Checkbox>
            <Checkbox>Steel</Checkbox>
            <Checkbox>Fairy</Checkbox>
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
