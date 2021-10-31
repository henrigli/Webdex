import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./name/nameSlice";
import { searchSlice } from "./search/searchSlice";
import { saveName } from "./name/localStorage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
      logger: nameSlice.reducer,
      parameters: searchSlice.reducer,
    },
});
  
store.subscribe(() => {
    saveName({name: store.getState().logger.name})
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectName = (state: RootState) => state.logger.name;
export const { setName, clearName } = nameSlice.actions;

export const selectFilter = (state: RootState) => state.parameters.filter;
export const selectMinWeight = (state: RootState) => state.parameters.minWeight;
export const selectMaxWeight = (state: RootState) => state.parameters.maxWeight;

export const {
  setFilter,
  clearFilter,
  setMinWeight,
  clearMinWeight,
  setMaxWeight,
  clearMaxWeight,
} = searchSlice.actions;
