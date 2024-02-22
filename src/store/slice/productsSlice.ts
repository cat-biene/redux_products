import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/type";

export const loadProducts = createAsyncThunk(
    "products/loadProducts",
    async () => {
        const resp = await fetch("http://127.0.0.1:5500/products.json");
        const data = await resp.json();
        return data;
    }
)

const initialState: { list: Product[], status: string } = {
    list: [],
    status: "ready"
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    }
})

export default productsSlice.reducer;