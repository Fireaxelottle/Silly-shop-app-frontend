import React, {Component, useEffect,useState} from 'react'
import '../css/Home.css'
import Card from '../components/Card'
import shoe from "../assets/item.jpeg"
import axios from 'axios'






function Home() {

  const [data,setData] = useState([]);
   const Getdata = async()=>{
      try {
      const response = await axios.get('http://localhost:5000/api/v1/product/latest');
      setData(response.data.products);
  
    } catch (error) {
      console.error('Error fetching search results:', error);
    };
    }
  useEffect(() => {
    window.scrollTo(0, 0);
    Getdata();
  });
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
              <Card key={item._id} item={item}/>
            ))}
          </div>
        </div>
    </div>  
  )
}

export default Home
