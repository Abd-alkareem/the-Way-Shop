import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = "https://fakestoreapi.com/products/categories";


export const getCategorys = createAsyncThunk("categoryeSlice/getCategorys",async ()=>{
    const res = await fetch(api);
    const data = await res.json();
    return data;
})
const categoryeSlice = createSlice({
    initialState:[],
    name:"categoryeSlice",
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategorys.fulfilled, (state,action) =>{
            return action.payload;
        })
    },
})


export const {} = categoryeSlice.actions;
export default categoryeSlice.reducer;