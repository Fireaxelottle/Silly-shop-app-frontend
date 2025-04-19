import React , { useState , useEffect} from 'react'
import '../css/search.css'
import Card from '../components/Card'
import axios from 'axios'
import { useSelector } from "react-redux";

function Search() {
  const screenWidth = useSelector((state) => state.ui.screenWidth);

  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("ALL");
  // const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [results,setResults] = useState([])

  const newData = async()=>{  
    try {
    const response = await axios.get('http://localhost:5000/api/v1/product/find');
    setResults(response.data.products);

  } catch (error) {
    console.error('Error fetching search results:', error);
  }};
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
    newData();
  }, [query]);
  
 
  

  // const isPrevPage = page > 1;
  // const isNextPage = page < 4;

  return (
    <div className='search'>
      <h1>Search</h1>
      { screenWidth > 1000 ? "" :
      <div className="ser">
      <i className="fa-solid fa-magnifying-glass"></i>
     <input type="text" value={query} onChange={(e) => {setQuery(e.target.value) ; newData();}}  placeholder='Search by name...' />
      </div> 
      }

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
         {results.map((item) => (<Card key={item._id} item={item}/>))}
        </div>
       {results.length === 0 ? <p className='txt'>No Results</p> : "" }
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
