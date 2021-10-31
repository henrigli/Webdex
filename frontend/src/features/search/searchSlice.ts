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

const searchSlice = createSlice({
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

export const store = configureStore({
  reducer: {
    parameters: searchSlice.reducer,
  },
});

/*
store.subscribe(() => {
    saveFilter({name: store.getState().parameters.name})
})
*/

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectFilter = (state: RootState) => state.parameters.filter;
export const selectMinWeight = (state: RootState) => state.parameters.minWeight;
export const selectMaxWeight = (state: RootState) => state.parameters.maxWeight;
export const selectSort = (state: RootState) => state.parameters.sort;

export const {
  setFilter,
  clearFilter,
  setMinWeight,
  clearMinWeight,
  setMaxWeight,
  clearMaxWeight,
  setSort,
  clearSort,
} = searchSlice.actions;
