import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const initialState = {
    name: ''
};

const nameSlice = createSlice({
    name: "name",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        clearName: (state) => {
            state.name = "";
        }
    }
})

export const store = configureStore({
    reducer: {
      logger: nameSlice.reducer,
    },
  });
  
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectName = (state: RootState) => state.logger.name;

export const { setName, clearName } = nameSlice.actions;