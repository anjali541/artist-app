import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/reducers/counterSlice";


export const store = configureStore({
        reducer: {
            counterReducer: counterSlice,
        },
    });