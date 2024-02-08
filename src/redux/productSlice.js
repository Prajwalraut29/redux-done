import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[]
    },
    reducers:{
        addproducts:(state,action)=>{
            state.products = action.payload
        }
    }
})

export const {addproducts} = productSlice.actions
export default productSlice.reducer

