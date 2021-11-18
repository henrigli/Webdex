import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Spacer,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch, selectName, logOut } from "../features/store";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { AiOutlineUser } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri"

export const Header = () => {
  const dispatch = useAppDispatch();
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
      <Box fontSize="lg" marginRight="1em" mt={1} fontStyle="italic">
        Hello, {reduxName || "guest"}!
      </Box>
      <Link href="/profile">
        <IconButton
          variant="ghost"
          icon={<AiOutlineUser fontSize="1.5rem" />}
          aria-label={`Go to profile`}
        />
      </Link>
      <Link
        href="/"
        onClick={() => {
          dispatch(logOut())
        }}
      >
        <IconButton
          variant="ghost"
          icon={<RiLogoutBoxRLine />}
          aria-label="Log out"
        />
      </Link>

      <ColorModeSwitcher />
    </Flex>
  );
};
