import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/products-slice";
import cartSlice from "./Slices/cart-slice";
import categoryeSlice from "./Slices/categorye-slice";


const store = configureStore({
    reducer:{
        products:productsSlice,
        cart:cartSlice,
        categorys:categoryeSlice,

    }
})

export default store;