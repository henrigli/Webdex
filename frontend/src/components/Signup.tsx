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
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { POST_USER } from "../services/graphql";

const CFaUserAlt = chakra(FaUserAlt);

const Signup = () => {
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState([]);
  const [inputName, setInputName] = useState("");
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    console.log(errorMessages);
  });

  const [postUser, { data, loading, error }] = useMutation(POST_USER, {
    variables: {
      name: inputName,
    },
    fetchPolicy: "no-cache"
  });

  const handleRegistration = async () => {
    console.log("posting data to the api...");

    if (inputName == "") {
      return console.log("invalid username, please write something");
    }

    postUser({ variables: { name: inputName } }).then(payload => {
      if (payload.data) {
        if (payload.data.createUser.user != null) {
          setUsername(payload.data.createUser.user.name);
          console.log(payload.data.createUser.user, payload.data.createUser.errors);
          console.log("Username from server:", username);

          history.push("/login");
        }
        else if (payload.data.createUser.errors) {
          payload.data.createUser.errors.map((err: any) => console.log(err.message));
          setErrorMessages(
              payload.data.createUser.errors.map((err: any) => err.message)
            );
        }
      }
    });

    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;

  };

  const redirect = () => {
    const name: string = data.createUser.user.name;
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
              {errorMessages.map(err => <p>{err}</p>)}
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setInputName(e.target.value)}
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