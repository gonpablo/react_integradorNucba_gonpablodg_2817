import { createSlice } from "@reduxjs/toolkit";
import { productsCategoriesBD } from "../../source_db/productsBD";

const INITIAL_STATE = {
    categories: productsCategoriesBD,
    selectedCategory: null,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        categories: (state) => {
            return state;
        },
        
        selectCategory : (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        },
    }
})

export const {categories, selectCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer

