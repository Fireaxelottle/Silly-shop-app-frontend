import React from 'react'

const CardItem = ({item}) => {
  return (
    <div className='Citem'>
        <div className="img"><img src={item.img} alt="" /></div>
        <div className='names'>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
        </div>
        <div className='amount'>
            <span className='inc'>+</span>
            <p>{item.amount}</p>
            <span className='inc'>-</span>
        </div>
        <button><i class="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default CardItem
