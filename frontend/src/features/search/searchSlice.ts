import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState: { filter: String; minWeight: Number; maxWeight: Number } = {
  filter: "",
  minWeight: 0,
  maxWeight: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = "";
    },
    setMinWeight: (state, action: PayloadAction<number>) => {
      state.minWeight = action.payload;
    },
    clearMinWeight: (state) => {
      state.minWeight = 0;
    },
    setMaxWeight: (state, action: PayloadAction<number>) => {
      state.maxWeight = action.payload;
    },
    clearMaxWeight: (state) => {
      state.maxWeight = 0;
    },
  },
});
