import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addproducts } from '../redux/productSlice';
import { addtocart } from '../redux/cartSlice';

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=> state.product.products)
    async function GetData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
     dispatch(addproducts(data))
    console.log(data);
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className='box'>
    {
      products.map((item)=>{
        return <div className='cards' key={item.id}>
        <div>
        <h4>{item.title.slice(0,10)}</h4>
        <img src={item.image} alt="" />
        <p>{item.price}₹</p>
        </div>
       <div>
       <button  onClick={()=>dispatch(addtocart({
          id : item.id,
          image : item.image,
          title : item.title,
          price : item.price,
          qty : 1
        }))}>Add To Card</button>
       </div>
       
        </div>
      })
    }
      
    </div>
  )
}

export default Home
