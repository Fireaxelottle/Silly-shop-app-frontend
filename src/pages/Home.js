import React from 'react'
import '../Css/Home.css'
import Card from '../components/Card'
import shoe from "../assets/item.jpeg"

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
            <Card img={shoe}/>
            <Card img={shoe}/>
            <Card img={shoe}/>
            <Card img={shoe}/>
            <Card img={shoe}/>
            <Card img={shoe}/>
          </div>
        </div>
    </div>  
  )
}

export default Home
