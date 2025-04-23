import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/productInfo.css";

const ProductInfo = () => {
  const [data, setData] = useState({
    name: "Adidas Shoes",
    photo: "uploads/b6d62f0a-9f0e-477c-bb45-7aa4192bbace.jpg",
    price: 1000,
    stock: 20,
  });

  const [amount, setAmount] = useState(1);

  const isPrevAmo = amount > 1;
  const isNextAmo = amount < data.stock;

  const { id } = useParams();
  return (
    <div className="main">
      <div className="Showcase">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkkE4MAAkihr1xFfnmeMZPRNH4JEhIA-QZA&s"
          alt=""
        />
        <div className="cover"></div>
      </div>
      <div className="details">
        <h2>{data.name}</h2>
        <p>${data.price}</p>
        <p>{data.stock} in stock</p>
        <div className="amo">
          <span  className="inc" onClick={() =>{if(isPrevAmo){setAmount(amount - 1)}}}>-</span>
          <span>{amount}</span>
          <span  className="inc" onClick={() =>{if(isNextAmo){ setAmount(amount + 1)}}}>+</span>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
