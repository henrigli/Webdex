import {
  Flex,
  Heading,
  useColorModeValue,
  Spacer,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Header = () => {
  const bgcolor = useColorModeValue("teal", "whiteAlpha.50");

  return (
    <Flex padding={6} bg={bgcolor} color="white" shadow="md">
      <Flex mr={5}>
        <Heading
          as="h1"
          size="md"
          letterSpacing={"tighter"}
          fontSize={{ base: "0px", sm: "0px", lg: "40px" }}
        >
          <a href="/">Webdex</a>
        </Heading>
      </Flex>
      <Spacer />
      <IconButton
        variant="ghost"
        icon={<Avatar bg="teal.500" size="sm" />}
        aria-label={`Go to profile`}
      />
      <ColorModeSwitcher />
    </Flex>
  );
};
