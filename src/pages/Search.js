import React , { useState } from 'react'
import { Link, data } from 'react-router-dom' 
import '../css/search.css'
import Card from '../components/Card'

function Search() {

  const newData = ()=> {
    
  }
 
  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg", 
      name: "Airforce" ,
      price: "$30"
    } , 
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg", 
      name: "Airforce" ,
      price: "$30"
    } ,
  ]

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);

  // const isPrevPage = page > 1;
  // const isNextPage = page < 4;

  return (
    <div className='search'>
      <h1>Search</h1>
      <div className="ser">
      <i class="fa-solid fa-magnifying-glass"></i>
     <input type="text" value={search} onChange={(e) => {setSearch(e.target.value) ; newData();}}  placeholder='Search by name...' />
      </div>

    <div className="choises">
 
    <div className='Slc'>
        <h3>Prices:</h3>
        <select value={sort} onChange={(e) => {setSort(e.target.value); newData();}}>
          <option value="">None</option>
          <option value="asc">Price (Low to High)</option>
          <option value="dsc">Price (High to Low)</option>
        </select>
    </div>
    
    <div className='Slc'>
        <h3>Category:</h3>
        <select
          value={category}
          onChange={(e) =>{ setCategory(e.target.value); newData(); }}
        >
          <option value="">ALL</option>
          <option value="">Category 1</option>
          <option value="">Category 2</option>
        </select>
    </div>

    <div className='Slc'>
        <h4>Max Price: {maxPrice}</h4>
        <input
          type="range"
          min={100}
          max={100000}
          value={maxPrice}
          onChange={(e) => {setMaxPrice(Number(e.target.value)); newData();}}
        />
     </div>
   </div>
  
      <div className="result">
        <h1>Results:</h1>
        <div className="cards">
         {data.map((item) => (<Card key={item.id} item={item}/>))}
        </div>
       {data.length === 0 ? <p className='txt'>No Results</p> : "" }
      </div>

    {/* <div className='pgch'>
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
    </div> */}
  </div>
   
  )
}

export default Search
