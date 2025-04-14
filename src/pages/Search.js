import React , { useState } from 'react'
import { Link } from 'react-router-dom' 
import '../css/search.css'

function Search() {
  return (
    <div className='search'>
     <input type="text" placeholder='Search' />
     <div className="values">
        <div className="value">
            <label htmlFor="">Price Range</label>
            <input type="number" />
        </div>
        <div className="value">
            <label htmlFor="">Stock Range</label>
            <input type="number" />
        </div>
     </div>
    </div>
  )
}

export default Search
