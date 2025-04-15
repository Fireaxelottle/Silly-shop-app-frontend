import React from 'react'

const Card = ({item}) => {

  return (
    <div className="card">
      <div className="im"><img src={item.img} alt="" /></div>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button className='btn'>Show More</button>
    </div>
  )
}

export default Card
