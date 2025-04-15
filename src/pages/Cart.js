import React from 'react'
import "../css/cart.css"
import CardItem from '../components/CardItem'

function Cart() {
   const data = [
    {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp.jpg", 
    name: "Airforce" ,
    price: "$30",
    amount: 1,
  } , 
  {
    id: 2,
    img:  "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp.jpg", 
    name: "Airforce" ,
    price: "$30",
    amount: 1,
  } 
  ]


  return (
    <div className='cart'>
      <h1>Cart</h1>
      <div className="items">
        {data.map((item)=>(<CardItem key={item.id} item={item}/> ))}
      </div>
      <div className="Total">
        <h2>Total</h2>
        <p>$32423</p>
      </div>
      <button className='orderBtn'>Order</button>
    </div>
  )
}

export default Cart
