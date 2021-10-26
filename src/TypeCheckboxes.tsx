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
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
