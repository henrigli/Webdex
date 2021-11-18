import { useEffect } from "react";
import {
  Box,
  Image,
  Badge,
  useColorModeValue,
  Spacer,
  Center,
} from "@chakra-ui/react";
import {
  selectFavorites,
  selectName,
  useAppSelector,
  addFavorite,
  removeFavorite,
  useAppDispatch
} from "../features/store";
import { useParams } from "react-router";
import { ADD_FAVORITE, FIND_ONE, REMOVE_FAVORITE } from "../services/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Star } from "./Star";

const PokemonPage = () => {
  const params: { id: string } = useParams();
  const id = parseInt(params.id);
  const reduxFaves = useAppSelector(selectFavorites);
  const reduxName = useAppSelector(selectName);
  const isFavorite = reduxFaves.includes(id);
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  const dispatch = useAppDispatch();

  const { loading, error, data } = useQuery(FIND_ONE, {
    variables: {
      id: id,
    },
  });

  const [updateServerFavorite] = useMutation(
    isFavorite ? REMOVE_FAVORITE : ADD_FAVORITE, {
      variables: { name: reduxName, id: id },
      fetchPolicy: "no-cache"
    });

  const updateFavorite = () => {
    updateServerFavorite()
      .then(() => {
        dispatch((isFavorite ? removeFavorite : addFavorite)(id))
      })
      .catch(err => alert(err));
  };

  useEffect(() => {});

  if (loading) return <Box>Loading...</Box>;
  if (error) return <Box>{error.name}: {error.message} :(</Box>;

  return (
    <>
      <a href="/">
        <IconButton
          aria-label="Go back"
          icon={<ArrowBackIcon w={10} h={10} color="teal.500" />}
          marginTop="2em"
          marginLeft="2em"
          float="left"
        />
      </a>
      <Center>
        <Box
          maxW="2xl"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={bgcolor}
          shadow="md"
          marginTop="2em"
        >
          <Star
            isFavorite={isFavorite}
            onClick={updateFavorite}
          />
          <Center>
            <Image
              maxW="xs"
              src={`http://it2810-06.idi.ntnu.no/images/large/${data.pokemon.id}.png`}
              alt={"Picture of " + data.pokemon.name}
              alignItems="center"
            />
          </Center>
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="orange">
                {data.pokemon.types.join(" / ")}
              </Badge>
              <Spacer />
              <Box
                color="gray.400"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                ml="2"
              >
                {data.pokemon.weight}kg &bull; {data.pokemon.height}m
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.pokemon.name}
            </Box>

            <Box as="i" noOfLines={3}>
              {data.pokemon.description}
              <Box as="span" color="gray.600" fontSize="xs"></Box>
            </Box>

            <Box fontSize="xs">ID: {data.pokemon.id}</Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default PokemonPage;
