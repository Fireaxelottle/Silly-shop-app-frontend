import React from 'react'


const Card = ({item}) => {

  
  return (
    <div className="card">
      <div className="im"><img src={`http://localhost:5000/${item.photo}`} alt="" />  </div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className='btn'>Show More</button>
    </div>
  )
}

export default Card
