import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadName } from "./localStorage";

const initialState: { name: String } = loadName();

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
  },
});
