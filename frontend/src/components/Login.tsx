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
import { FaUserAlt } from "react-icons/fa";
import {
  useAppSelector,
  useAppDispatch,
  setName,
  selectName,
} from "../features/store";

import { FIND_USER } from "../services/graphql";

const CFaUserAlt = chakra(FaUserAlt);

const Login: React.FC = () => {
  const reduxName = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  // local state for sending query.
  const [username, setuserName] = useState("");

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
    if (error) return console.error(error);

    // TS hates reading non-existant data 👵🏻
    if (data.user != null) {
      redirect(data.user.name);
    }
  };

  // redirects to frontpage and sets name for the entire application.
  const redirect = (name: string) => {
    dispatch(setName(name));
    console.log(name);
  };

  const bgcolor = useColorModeValue("white", "whiteAlpha.50");

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
        <Heading color="teal.400">Welcome, {reduxName}</Heading>
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
