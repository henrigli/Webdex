import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Header = () => {
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");

  return (
    <Flex padding={6} bg={bgcolor} color="white" shadow="md">
      <Flex align="center" mr={5}>
        <Heading
          as="h1"
          size="md"
          letterSpacing={"tighter"}
          fontSize={{ base: "0px", sm: "0px", lg: "40px" }}
        >
          Pokémon
        </Heading>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
};
