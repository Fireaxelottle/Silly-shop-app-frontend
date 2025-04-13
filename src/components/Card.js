import React from 'react'

const Card = ({img}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <h2>Airforce</h2>
        <p>$30</p>
        <button className='btn'>Show More</button>
    </div>
  )
}

export default Card
