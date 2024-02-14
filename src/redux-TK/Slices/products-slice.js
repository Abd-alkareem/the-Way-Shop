import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk("ProductsSlice/fetchProducts",async ()=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
})
const productSlice = createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            return action.payload;
        })
    },
})


export const {} = productSlice.actions;
export default productSlice.reducer;