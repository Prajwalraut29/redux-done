import { configureStore } from '@reduxjs/toolkit';
import productSlice from './redux/productSlice';
import cartSlice from './redux/cartSlice'

const store = configureStore({
    reducer:{
    product : productSlice,
    cart :  cartSlice
    }
})

export default store