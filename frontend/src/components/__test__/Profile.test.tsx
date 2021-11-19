import { render, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { FIND_ONE, GET_FAVORITES } from '../../services/graphql';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import Profile from '../Profile';

const mocks = [
  {
    request: {
      query: GET_FAVORITES,
      variables: {
        name: "hei"
      }
    },
    result: {
      data: {
        user: {
          favorites: [1,4,7]}
      }
    }
  },
  {
    request: {
      query: FIND_ONE,
      variables: {
        id: 1
      }
    },
    result: {
      "data": {
        "pokemon": {
          "id": 1,
          "name": "Bulbasaur",
          "types": [
            "Grass",
            "Poison"
          ],
          "height": 0.7,
          "weight": 6.9,
          "description": "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow."
        }
      }
    }
  },
  {
    request: {
      query: FIND_ONE,
      variables: {
        id: 4
      }
    },
    result: {
      "data": {
        "pokemon": {
          "id": 4,
          "name": "Charmander",
          "types": [
            "Fire"
          ],
          "height": 0.6,
          "weight": 8.5,
          "description": "From the time it is born, a flame burns at the tip\nof its tail. Its life would end if the flame were to\ngo out."
        }    
      }
    }
  },
  {
    request: {
      query: FIND_ONE,
      variables: {
        id: 7
      }
    },
    result: {
      "data": {
        "pokemon": {
          "id": 7,
          "name": "Squirtle",
          "types": [
            "Water"
          ],
          "height": 0.5,
          "weight": 9,
          "description": "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth."
        }
          }
    }
  },
];

test('show correct favorite pokemon', async () => {
  const store = configureStore({
    reducer: {
      user: createSlice({
        name: "name",
        initialState: { name: "hei", favorites: [1, 4, 7]},
        reducers: {}
      }).reducer,
    },
  });

  render (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
          <Profile />
      </Provider>
    </MockedProvider>
  );

  const result = await waitForElement(() => document.querySelector("#favorites"));
  
  expect(result?.children[0]).toHaveTextContent("Bulbasaur");
  expect(result?.children[1]).toHaveTextContent("Charmander");
  expect(result?.children[2]).toHaveTextContent("Squirtle");
});
