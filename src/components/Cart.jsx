import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removecards } from '../redux/cartSlice';

const Cart = () => {
const carts = useSelector((state)=>state.cart.carts);
const cartCount =carts.reduce((acc , item)=> acc+item.qty,0)
const total =carts.reduce((acc , item)=> acc+item.price,0)
const dispatch = useDispatch()
  return (
    <>
  <span className='total'> inventory : 
    {cartCount }
    <br />
    total :{total}
    </span>
    <div className='box'>
  
    {
      carts.map((item)=>{
        return <div className='cards' key={item.id}>
        <div>
        <h4>{item.title}</h4>
        <img src={item.image} alt="" />
        </div>
        <div>
        <h3>quentity : {item.qty}</h3>
        <button className='remove'  onClick={()=>dispatch(removecards(item))}>remove</button>
        </div>
        </div>
      })
    }
      
    </div>
    </>

  )
}

export default Cart
