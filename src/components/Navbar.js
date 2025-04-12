import React, {useState} from 'react'

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
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Cart</a>
            </li>
            <li>
                <a href="#">Search</a>
            </li>
            <li>
                <a href="#">Login</a>
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