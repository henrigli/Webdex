import { useMutation } from "@apollo/client";
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
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { POST_USER } from "../services/graphql";

const CFaUserAlt = chakra(FaUserAlt);

const Signup = () => {
  const [username, setuserName] = useState("");

  const [postUser, { data, loading, error }] = useMutation(POST_USER, {
    variables: {
      name: username,
    },
  });

  const handleRegistration = async () => {
    console.log("posting data to the api...");

    if (username == null) {
      return console.log("invalid username, please write something");
    }

    postUser({ variables: { name: username } });

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

    if (data.createUser != null) {
      redirect();
    }
  };

  const redirect = () => {
    const name: string = data.createUser.name;
    console.log(name);
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
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
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
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
                onClick={handleRegistration}
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have a user?{" "}
        <Link color="teal.500" href="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;
