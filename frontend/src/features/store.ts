import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/userSlice";
import { searchSlice } from "./search/searchSlice";
import { saveUser } from "./user/localStorage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    parameters: searchSlice.reducer,
  },
});

store.subscribe(() => {
  saveUser({
    name: store.getState().user.name,
    favorites: store.getState().user.favorites
  });
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectName = (state: RootState) => state.user.name;
export const selectFavorites = (state: RootState) => state.user.favorites;

export const {
  setName,
  clearName,
  setFavorites,
  clearFavorites,
  addFavorite,
  removeFavorite
} = userSlice.actions;

export const selectFilter = (state: RootState) => state.parameters.filter;
export const selectMinWeight = (state: RootState) => state.parameters.minWeight;
export const selectMaxWeight = (state: RootState) => state.parameters.maxWeight;
export const selectSort = (state: RootState) => state.parameters.sort;
export const selectSkip = (state: RootState) => state.parameters.skip;
export const selectLimit = (state: RootState) => state.parameters.limit;

export const {
  setFilter,
  clearFilter,
  setMinWeight,
  clearMinWeight,
  setMaxWeight,
  clearMaxWeight,
  setSort,
  clearSort,
  setSkip,
  clearSkip,
  setLimit,
  clearLimit,
  prevPage,
  nextPage,
} = searchSlice.actions;
