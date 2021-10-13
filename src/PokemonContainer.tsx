import React from 'react';
import { Box, Image, Badge } from '@chakra-ui/react'

type Props = {
    id: string;
    title: string;
    imgPath: string;
};

const PokemonContainer = () => {

    interface property {
        id: number,
        imageUrl: string,
        imageAlt: string,
        type: string[],
        weight: number,
        height: number,
        title: string,
        description: string
    }
    const property = {
        id: 4,
        imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
        imageAlt: "Magicarp",
        type: ["Water", "Earth"],
        weight: 10.0,
        height: 0.9,
        title: "Magicarp",
        description: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
      }

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />
        
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                { property.type }
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                ml="2"
              >
                {property.weight}kg &bull; {property.height}m
              </Box>
            </Box>
    
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>
    
            <Box>
              {property.description}
              <Box as="span" color="gray.600" fontSize="sm">
                
              </Box>
            </Box>
    
              <Box as="span" fontSize="sm">
                  ID: {property.id}
              </Box>
            </Box>
          </Box>
      )
    }

export default PokemonContainer;