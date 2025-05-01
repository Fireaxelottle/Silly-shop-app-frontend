import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct, fetchCategories } from "../../redux/product";

const AddProduct = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add states for form fields
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setPrice(value);
    }
  };

  const handleStockChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setStock(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Number(price) <= 0) {
      alert("Price must be greater than 0");
      return;
    }
    if (Number(stock) <= 0) {
      alert("Stock must be greater than 0");
      return;
    }

    const productData = {
      name,
      price,
      stock,
      category,
      photo,
    };
console.log(productData)
    await dispatch(createProduct(productData));
    navigate("/admin/product");
    
  };

  return (
    <div className="registery">
      <h1>Product Info</h1>

      <form className="inp" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={handlePriceChange}
          min="0"
        />

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={handleStockChange}
          min="0"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="file"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button type="submit">Make</button>
      </form>
    </div>
  );
};

export default AddProduct;
