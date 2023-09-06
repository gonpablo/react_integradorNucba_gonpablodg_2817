import { createSlice } from "@reduxjs/toolkit";
import { productsBD } from "../../source_db/productsBD";

const INITIAL_STATE = {
    products: productsBD,
    totalProducts: productsBD.length,
}

export const productsSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state) => {
            return state;
        },
    }
})

export const {getProducts} = productsSlice.actions;
export default productsSlice.reducer