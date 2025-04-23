import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Card from "../components/Card";
import axios from "axios";

function Home() {
  
  const [query] = useState("");
  const [page, setPage] = useState(1);

  const [data, setData] = useState([
    {
      _id: "67a4ee06f8c4745a0fbf0fbc",
      name: "Adidas Shoes",
      photo: "uploads/b6d62f0a-9f0e-477c-bb45-7aa4192bbace.jpg",
      price: 1000,
    },
    {
      _id: "67a4ee06f8c4745a0fbf0fbc",
      name: "Adidas Shoes",
      photo: "uploads/b6d62f0a-9f0e-477c-bb45-7aa4192bbace.jpg",
      price: 1000,
    },
    {
      _id: "67a4ee06f8c4745a0fbf0fbc",
      name: "Adidas Shoes",
      photo: "uploads/b6d62f0a-9f0e-477c-bb45-7aa4192bbace.jpg",
      price: 1000,
    },
    {
      _id: "67a4ee06f8c4745a0fbf0fbc",
      name: "Adidas Shoes",
      photo: "uploads/b6d62f0a-9f0e-477c-bb45-7aa4192bbace.jpg",
      price: 1000,
    },
  ]);

  const Getdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/product/latest"
      );
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const isPrevPage = page > 1;
  const isNextPage = page < data.length / 10;

  const itemsPerPage = 10;
  const paginatedItems = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

 

  useEffect(() => {
    Getdata();
  }, [query]);
  console.log(data);
  return (
    <div className="home">
      <div className="Showcase">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkkE4MAAkihr1xFfnmeMZPRNH4JEhIA-QZA&s"
          alt=""
        />
        <div className="cover"></div>
        <div className="data">
          <h1>EVERYTHING.</h1>
          <p>You Buy. We Sell.</p>
        </div>
      </div>
      <div className="main">
        <h1>Shop</h1>
        <div className="cards">
          {paginatedItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
        <div className="pgch">
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}>
            Prev
          </button>
          <span>{page}</span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
