import React, { useState, useEffect } from "react";
import "../css/search.css";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

function Search() {
  const screenWidth = useSelector((state) => state.ui.screenWidth);

  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
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
    }
  ]);

  const newData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/product/find"
      );
      setResults(response.data.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    newData();
  }, [query]);

  const isPrevPage = page > 1;
  const isNextPage = page < results.length / 10;

  const itemsPerPage = 10;
  const paginatedItems = results.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="container">
      <h1>Search</h1>
      {screenWidth > 1000 ? (
        ""
      ) : (
        <div className="ser">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              newData();
            }}
            placeholder="Search by name..."
          />
        </div>
      )}
      <div className="search">
        <div className="choises">
          {screenWidth > 1000 ? <h1>Filter</h1> : ""}

          <div className="Slc">
            <h3>Category:</h3>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                newData();
              }}>
              <option value="">ALL</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
            </select>
          </div>
          <div className="Slc">
            <h3>Prices:</h3>
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                newData();
              }}>
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>

          <div className="Slc">
            <h3>Max Price:</h3>
            <h3>{maxPrice}</h3>
          </div>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
              newData();
            }}
          />
        </div>

        <div className="result">
          <h1>Results:</h1>
          <div className="cards">
            {paginatedItems.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
          {paginatedItems.length === 0 ? <p className="txt">No Results</p> : ""}

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
    </div>
  );
}

export default Search;
