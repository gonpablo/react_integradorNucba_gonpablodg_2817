import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"
import productsReducer from "./productsSlice/productsSlice"
import categoriesReducer from "./categoriesSlice/categoriesSlice"
import cartSlice from "./cartSlice/cartSlice"

const reducers = combineReducers ({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartSlice,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}


const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});


export const persistor = persistStore(store)