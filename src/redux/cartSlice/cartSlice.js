import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartProducts: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        cart: (state) => {
            return state;
        },
        /*
        selectCategory : (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        }, */
    }
})

export const {cart} = cartSlice.actions;
export default cartSlice.reducer
