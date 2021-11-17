import React from "react";
import { Box, Image, Badge, useColorModeValue, Spacer } from "@chakra-ui/react";
import { Pokemon } from "../services/graphql";
import { useHistory } from "react-router-dom";

const PokemonContainer = (props: { pokemon: Pokemon }) => {
  const bgcolor = useColorModeValue("white", "whiteAlpha.50");
  const bgcolorSelected = useColorModeValue("gray.50", "whiteAlpha.200");
  let history = useHistory();

  function handleClick() {
    history.push(`/pokemon/${props.pokemon.id}`);
  }

  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgcolor}
      shadow="md"
      onClick={handleClick}
      _hover={{
        bg: bgcolorSelected,
        transform: "scale(0.98)",
        cursor: "pointer",
      }}
    >
      <Image
        maxW="xs"
        src={`http://it2810-06.idi.ntnu.no/images/large/${props.pokemon.id}.png`}
        alt={"Picture of " + props.pokemon.name}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="orange">
            {props.pokemon.types.join(" / ")}
          </Badge>
          <Spacer />
          <Box
            color="gray.400"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            {props.pokemon.weight}kg &bull; {props.pokemon.height}m
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.pokemon.name}
        </Box>

        <Box fontSize="xs">ID: {props.pokemon.id}</Box>
      </Box>
    </Box>
  );
};

export default PokemonContainer;
