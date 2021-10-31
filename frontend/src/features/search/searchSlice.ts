import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState: {
  filter: string;
  minWeight: number;
  maxWeight: number;
  sort: string;
  skip: number;
  limit: number;
} = {
  filter: "",
  minWeight: 0,
  maxWeight: 0,
  sort: "",
  skip: 0,
  limit: 24,
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
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    clearSkip: (state) => {
      state.skip = 0;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    clearLimit: (state) => {
      state.limit = 24;
    },
    prevPage: (state) => {
      state.skip = Math.max(state.skip - state.limit, 0);
    },
    nextPage: (state) => {
      state.skip = state.skip + state.limit;
    }
  },
});
