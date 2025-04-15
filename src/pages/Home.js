import React from 'react'
import '../css/Home.css'
import Card from '../components/Card'
import shoe from "../assets/item.jpeg"

const data = [
  {
  id: 1,
  img: "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg", 
  name: "Airforce" ,
  price: "$30"
} , 
{
  id: 1,
  img: shoe , 
  name: "Airforce" ,
  price: "$30"
} 
]

function Home() {
  return (
    <div className="home">
        <div className='Sowcase'>
            <div className="cover">
            </div>
            <div className='data'>
                <h1>EVERYTHING.</h1>
                <p>You Buy. We Sell.</p>
            </div>      
        </div>
        <div className="main">

          <h1>Shop</h1>
          <div className='cards'>
            {data.map((item) => (
              <Card key={item.id} item={item}/>
            ))}
          </div>
        </div>
    </div>  
  )
}

export default Home
