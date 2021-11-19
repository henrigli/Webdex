import { render, screen, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { store } from '../../features/store';
import { SEARCH_QUERY } from '../../services/graphql';
import { SearchResults } from '../SearchResults';

const mocks = [
  {
    request: {
      query: SEARCH_QUERY,
      variables: {
        "filter": "",
        "weight_gte": 0,
        "weight_lte": 0,
        "skip": 0,
        "limit": 24,
        "sort": ""
      }
    },
    result: {
      data: {pokemon_search: {pokemon: [
        {
            "id": 25,
            "name": "Pikachu",
            "types": [
                "Electric"
            ],
            "height": 0.4,
            "weight": 6,
            "description": "When it smashes its opponents with its bolt-\nshaped tail, it delivers a surge of electricity\nequivalent to a lightning strike."
        },
        {
            "id": 26,
            "name": "Raichu",
            "types": [
                "Electric"
            ],
            "height": 0.8,
            "weight": 30,
            "description": "This Pokémon rides on its tail while it uses\nits psychic powers to levitate. It attacks with\nstar-shaped thunderbolts."
        },
        {
            "id": 172,
            "name": "Pichu",
            "types": [
                "Electric"
            ],
            "height": 0.3,
            "weight": 2,
            "description": "The electric sacs in its cheeks are small. If even a\nlittle electricity leaks, it becomes shocked."
        }
      ], count: 4}}
    }
  }
];

test('search', async () => {
  render (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
          <SearchResults />
      </Provider>
    </MockedProvider>
  );

  const result = await waitForElement(() => screen.getByTestId("search-results"))
  
  expect(result.querySelector("#pokemon-25")).toHaveTextContent("Pikachu")
  expect(result.querySelector("#pokemon-26")).toHaveTextContent("Raichu")
  expect(result.querySelector("#pokemon-172")).toHaveTextContent("Pichu")
});
