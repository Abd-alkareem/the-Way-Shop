import { createSlice } from "@reduxjs/toolkit";


const carSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            const findProduct = state.find((product)=> product.id == action.payload.id);
            if(findProduct){
                findProduct.quantity += 1;
                
            }else {
                const productClone = {...action.payload , quantity:1}
                state.push(productClone);
            }        },
        deletFromCart:(state,action)=>{
            return state.filter((product) => product.id != action.payload.id)

        },
        clear:(atate,action)=>{
            return[]
        }
    }
})


export const {addToCart, deletFromCart,clear} = carSlice.actions;
export default carSlice.reducer;