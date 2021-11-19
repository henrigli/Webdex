import { render } from '@testing-library/react';
import React from 'react';
import { Pokemon } from '../../services/graphql';
//import TestRenderer from 'react-test-renderer';
import PokemonContainer from '../PokemonContainer';

test('render Pokémon correctly', () => {
  const pikachu: Pokemon = {
    "id": 25,
    "name": "Pikachu",
    "types": [
        "Electric"
    ],
    "height": 0.4,
    "weight": 6,
    "description": "When it smashes its opponents with its bolt-\nshaped tail, it delivers a surge of electricity\nequivalent to a lightning strike."
  };

  render(<PokemonContainer pokemon={pikachu}></PokemonContainer>);

  const h4 = document.querySelector("h4");
  expect(h4).toHaveTextContent("Pikachu");
});