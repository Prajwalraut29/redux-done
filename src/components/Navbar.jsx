import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cart = useSelector((state)=> state.cart.carts)
  return (
    <div>
     <nav>
<div className='head'>
<h2>Logo </h2>
</div>

<div className='compo'>
<li>
<Link to='/'><h3>Home</h3></Link>
</li>
<li>
<Link to='/cart'><h3>Cart  {cart.length === 0 ? null:cart.length}  </h3></Link>
</li>
</div>
</nav>
      
    </div>
  )
}

export default Navbar
