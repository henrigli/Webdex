import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState: {
  filter: String;
  minWeight: Number;
  maxWeight: Number;
  sort: String;
} = {
  filter: "",
  minWeight: 0,
  maxWeight: 0,
  sort: "",
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
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    clearSort: (state) => {
      state.sort = "";
    },
  },
});
