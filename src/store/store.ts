import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productsSlice";

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

