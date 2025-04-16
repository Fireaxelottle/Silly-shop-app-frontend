import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let b = "fa-bars"
    let a = "fa-bars-staggered"
    const [t, setT] = useState(b)
    const [open, setOpen] = useState(false)


    const toggle = () => {
        if(t === a){
            setT(b)
            setOpen(false)
        }
        else{
            setT(a)
            setOpen(true)
        }
    }
   
    
  return (
    <>
    <div className="navbar">
        <h1>Silly-Shop</h1>
        <i className={`fa-solid ${t}`} onClick={toggle}></i>
    </div>
    {
     open ?

    <div className={`links`} >
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>

    : 
    null
    }
    </>
  )
}

export default Navbar;