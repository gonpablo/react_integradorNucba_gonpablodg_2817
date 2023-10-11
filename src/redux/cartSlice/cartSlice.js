import { createSlice } from "@reduxjs/toolkit";
import { addItemToCartProducts, deleteItemToCartProducts, removeItemToCartProducts, totalPriceProducts, totalQuantityProducts } from "./cartFunctions";

const INITIAL_STATE = {
    cartProducts: [],
    totalPriceProducts: 0,
    totalQuantity: null,
    loading: false,
    infoText: "",
    hiddenModalClear: true,
    hiddenModalItem: true,
    hiddenModalShop: true,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addCartProducts: (state, action) => {
            return {
                ...state,
                loading: true,
                infoText: "Se ha agregado un producto al carrito",
                cartProducts: addItemToCartProducts(state.cartProducts, action.payload),
            }
        },

        removeCartProducts: (state, action) => {
            return {
                ...state,
                loading: true,
                infoText: "",
                cartProducts: removeItemToCartProducts(state.cartProducts, action.payload),
            }
        },

        deleteCartProducts: (state, action) => {
            return {
                ...state,
                infoText: "Se ha eliminado un producto del carrito",
                loading: true,
                cartProducts: deleteItemToCartProducts(state.cartProducts, action.payload),
            }
        },

        clearCartProducts: (state) => {
            return {
                ...state,
                infoText: "",
                loading: true,
                cartProducts: [],
                totalPriceProducts: 0,
                totalQuantity: null,
            }
        },
        

        toggleHiddenModalClear: (state) => {
            return {
                ...state,
                hiddenModalClear: !state.hiddenModalClear,
            }
        },

        toggleHiddenModalItem: (state) => {
            return {
                ...state,
                hiddenModalItem: !state.hiddenModalItem,
            }
        },

        toggleHiddenModalShop: (state) => {
            return {
                ...state,
                hiddenModalShop: !state.hiddenModalShop,
            }
        },

        hiddenInfoText: (state) => {
            return {
                ...state,
                infoText: "",
            }
        },

        updateCartTotalQty: (state) => {
            return {
                ...state,
                loading: false,
                totalPriceProducts: totalPriceProducts(state.cartProducts),
                totalQuantity: totalQuantityProducts(state.cartProducts),
            }
        } 
    }
})

export const {addCartProducts, removeCartProducts, deleteCartProducts, clearCartProducts, toggleHiddenModalClear, toggleHiddenModalItem, toggleHiddenModalShop, hiddenInfoText, updateCartTotalQty} = cartSlice.actions;
export default cartSlice.reducer
