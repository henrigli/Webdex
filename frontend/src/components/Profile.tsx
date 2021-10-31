import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Center,
  Grid,
  Heading,
  Spacer,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { selectName, useAppSelector } from "../features/store";
import { GET_FAVORITES, Pokemon } from "../services/graphql";
import FavoriteContainer from "./FavoriteContainer";
import PokemonContainer from "./PokemonContainer";

export const Profile = () => {
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  const reduxName = useAppSelector(selectName);

  const { loading, error, data } = useQuery(GET_FAVORITES, {
    variables: {
      name: reduxName,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  console.log(data);

  return (
    <VStack>
      <Center>
        <Box
          width="20em"
          height="13em"
          borderWidth="1px"
          borderRadius="lg"
          bg={bgcolor}
          shadow="md"
          marginTop="2em"
        >
          <Avatar
            aria-label={`Avatar`}
            size="lg"
            bg="teal.500"
            marginTop="1em"
          />
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xl"
            marginTop="1em"
          >
            {reduxName || "guest"}
          </Box>
        </Box>
      </Center>

      <Heading size="md" marginTop="2em">
        Your favorite Pokémon:
      </Heading>

      {
        <Grid templateColumns={"repeat(1, 1fr)"} gap={2}>
          {data.user.favorites.map((p: Number) => (
            <FavoriteContainer id={p} />
          ))}
        </Grid>
      }
    </VStack>
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Error = (props: { error: any }) => {
  console.log(props.error);

  return <div>Error :'(</div>;
};

export default Profile;
