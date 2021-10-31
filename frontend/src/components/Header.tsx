import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Spacer,
  Avatar,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useAppSelector, selectName } from "../features/store";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { UnlockIcon } from "@chakra-ui/icons";

export const Header = () => {
  const reduxName = useAppSelector(selectName);
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
      <Box fontSize="lg" marginRight="1em" fontStyle="italic">
        Hello, {reduxName || "guest"}!
      </Box>
      <Link color="teal.500" href="/profile">
        <IconButton
          variant="ghost"
          icon={<Avatar bg="teal.500" size="sm" />}
          aria-label={`Go to profile`}
        />
      </Link>
      <Link color="teal.500" href="/login">
        <IconButton
          variant="ghost"
          icon={<UnlockIcon bg="teal.500" size="sm" />}
          aria-label={`Go to profile`}
        />
      </Link>

      <ColorModeSwitcher />
    </Flex>
  );
};
