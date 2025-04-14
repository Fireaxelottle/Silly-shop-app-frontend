import React from 'react'

const Card = ({item}) => {

  return (
    <div className="card">
        <img src={item.img} alt="" />
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button className='btn'>Show More</button>
    </div>
  )
}

export default Card
