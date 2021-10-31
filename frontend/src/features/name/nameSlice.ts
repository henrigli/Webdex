import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { saveName, loadName } from "./localStorage";

const initialState: {name: String} = loadName();

export const nameSlice = createSlice({
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
