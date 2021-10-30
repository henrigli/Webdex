import React from "react";
import { Box, Image, Badge, useColorModeValue, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router";
import { FIND_ONE } from "../services/graphql";
import { useQuery as useGraphQuery } from "@apollo/client";

const PokemonPage = () => {
  const params: {id: string} = useParams();
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  console.log();
  const { loading, error, data } = useGraphQuery(FIND_ONE, {
    variables: {
      id: parseInt(params.id),
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgcolor}
      shadow="md"
    >
      <Image
        maxW="xs"
        src={`http://it2810-06.idi.ntnu.no/images/large/${data.pokemon.id}.png`}
      />

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
  );
};

const Loading = () => {
  return <div>Loading...</div>;
};

const Error = (props: { error: any }) => {
  console.log(props.error);

  return <div>Error :'(</div>;
};

export default PokemonPage;
