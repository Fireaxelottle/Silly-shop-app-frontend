import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let b = "fa-bars"
    let a = "fa-bars-staggered"
    let c = "hidden"
    const [t, setT] = useState(b)
    const [v, setV] = useState(false)


    const toggle = () => {
        if(t === a){
            setT(b)
            setV(false)
        }
        else{
            setT(a)
            setV(true)
        }
    }
   
    
  return (
    <>
    <div className="navbar">
        <h1>Silly-Shop</h1>
        <i class={`fa-solid ${t}`} onClick={toggle}></i>
    </div>
    {
     v ?

    <div className={`links`} >
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="#">Cart</Link>
            </li>
            <li>
                <Link to="#">Search</Link>
            </li>
            <li>
                <Link to="#">Login</Link>
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