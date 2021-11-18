import { useQuery } from "@apollo/client";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { FaUserAlt } from "react-icons/fa";
import {
  useAppDispatch,
  logIn,
} from "../features/store";

import { FIND_USER } from "../services/graphql";

const CFaUserAlt = chakra(FaUserAlt);

const Login: React.FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  // local state for sending query.
  const [username, setuserName] = useState("");
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");

  // query for finding user.
  const { loading, error, data } = useQuery(FIND_USER, {
    variables: {
      name: username,
    },
  });

  const handleLogin = async () => {
    if (loading) {
      console.log("loading...");
    }

    // error handling
    if (error) console.error(error);

    // TS hates reading non-existant data 👵🏻
    if (data && data.user) {
      redirect(data.user)
    } else {
      alert("There is no user with the username \"" + username + "\"")
    }
  };

  // Logs in and redirects to profile
  const redirect = (user: { name: string, favorites: number[] }) => {
    dispatch(logIn(user));
    history.push("/profile");
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor={bgcolor}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome back</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <Stack spacing={4} p="1rem" backgroundColor={bgcolor} boxShadow="md">
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setuserName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={0}
              variant="solid"
              colorScheme="teal"
              width="full"
              onClick={handleLogin}
            >
              Login
            </Button>
            <p id="testing"></p>
          </Stack>
        </Box>
      </Stack>
      <Box>
        Don't have a user?{" "}
        <Link color="teal.500" href="/signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
