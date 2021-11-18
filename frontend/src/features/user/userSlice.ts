import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadName } from "./localStorage";

const initialState: { name: String, favorites: number[] } = loadName();

export const userSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<{name: string, favorites: number[]}>) => {
      state.name = action.payload.name;
      state.favorites = action.payload.favorites;
    },
    logOut: (state) => {
      state.name = "";
      state.favorites = [];
    },
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((f) => f !== action.payload);
    },
  },
});
