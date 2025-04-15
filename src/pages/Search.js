import React , { useState } from 'react'
import { Link } from 'react-router-dom' 
import '../css/search.css'

function Search() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  return (
    <div className='search'>
      <h1>Search</h1>
     <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder='Search by name...' />

    <div className="choises">
 
    <div>
        <h3>Prices</h3>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Price (Low to High)</option>
          <option value="dsc">Price (High to Low)</option>
        </select>
    </div>
    <div>
        <p>Max Price: {maxPrice || ""}</p>
        <input
          type="range"
          min={100}
          max={100000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
    </div>
    
    <div>
        <h3>Category</h3>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">ALL</option>
          <option value="">Category 1</option>
          <option value="">Category 2</option>
        </select>
    </div>

    </div>
    
      <div className="result">

      </div>

    <div className='pgch'>
      <button
        disabled={!isPrevPage}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Prev
      </button>
      <span>
        {page} of {4}
      </span>
      <button
        disabled={!isNextPage}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
    </div>
   
  )
}

export default Search
