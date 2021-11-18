import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadName } from "./localStorage";

const initialState: { name: String, favorites: number[] } = loadName();

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearName: (state) => {
      state.name = "";
    },
    setFavorites: (state, action: PayloadAction<number[]>) => {
      state.favorites = action.payload;
    },
    clearFavorites: (state) => {
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
