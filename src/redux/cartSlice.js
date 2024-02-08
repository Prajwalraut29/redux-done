import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        carts:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            const existingItem = state.carts.find((item) => item.id === action.payload.id)
            if(existingItem){
                state.carts = state.carts.map((item)=>
                item.id === action.payload.id ?{...item,qty:item.qty+1}:item)
            }
            else{
                state.carts.push(action.payload)
            }
        },
        removecards:(state,action)=>{
            state.carts = state.carts.filter((item)=> item.id !== action.payload.id)

        }

    }
})


export const {addtocart , removecards} = cartSlice.actions
export default cartSlice.reducer