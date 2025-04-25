import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  let b = "fa-bars";
  let a = "fa-bars-staggered";
  const [t, setT] = useState(b);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggle = () => {
    if (t === a) {
      setT(b);
      setOpen(false);
    } else {
      setT(a);
      setOpen(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search`);
  };

  const screenWidth = useSelector((state) => state.ui.screenWidth);

  if (screenWidth > 750 && screenWidth < 1000) {
    return (
      <>
        <div className="navbar">
          <h1>Silly-Shop</h1>
          <div className="links">
            <ul>
              <li>
                <Link to="/">
                  <i class="fa-solid fa-house"></i>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              { user ? "" :<li><Link to="/login">Log-in</Link> </li>}
            </ul>
          </div>
        </div>
      </>
    );
  } else if (screenWidth > 1000) {
    return (
    <> 
    <div className="navbar">
     <h1>Silly-Shop</h1>
      <div className="ser">
      <i className="fa-solid fa-magnifying-glass"></i>
     <input onClick={handleSearch} type="text" value={query} onChange={(e) => {setQuery(e.target.value)}}  placeholder='Search by name...' />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
          { user ? "" :<li><Link to="/login">Log-in</Link> </li>}
        </ul>
      </div>
    </div>
  </> );
  } else {
    return (
      <>
      <div className="navbar">
        <div className="head">
        <i className={`fa-solid ${t}`} onClick={toggle}></i>
        <h1>Silly-Shop</h1>
        </div> 
        <Link to="/login">Login</Link>
      </div>
      {open ? (
        <div className={`links`}>
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
          </ul>
        </div>
      ) : null}
      
    </>
    );
  }
}

export default Navbar;
