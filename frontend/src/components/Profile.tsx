import {
  Avatar,
  Box,
  Center,
  Grid,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { selectName, useAppSelector } from "../features/store";

export const Profile = () => {
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  const reduxName = useAppSelector(selectName);

  return (
    <>
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

      {/* Hente ut favorittpokemonene: */}

      {/* <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        {data.pokemon_search.map((p: Pokemon) => (
          <PokemonContainer pokemon={p} />
        ))}
      </Grid> */}
    </>
  );
};

export default Profile;
