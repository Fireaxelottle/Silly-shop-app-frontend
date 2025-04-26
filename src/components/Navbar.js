import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  let b = "fa-bars";
  let a = "fa-bars-staggered";
  const [t, setT] = useState(b);
  const [openNav, setOpenNav] = useState(false);
  const [openUsr, setOpenUsr] = useState(false);
  const [user, setUser] = useState({
      name: "ali", role: "admin" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0YydlYJTpwQjehsYWvZAda5Efy4DCMXJMg&s",
  });
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const toggleNavigation = () => {
    if (t === a  ) {
      setT(b);
      setOpenNav(false);
      setOpenUsr(false);
    } else {
      setT(a);
      setOpenNav(true);
      setOpenUsr(false);
    }
  };

  const toggleUser = () => {
    if (openUsr) {
      setT(b);
      setOpenUsr(false);
      setOpenNav(false);
    } else {
      setT(b);
      setOpenUsr(true);
      setOpenNav(false);
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
              { user.name ? <li> <img src={user.img} alt=""  onClick={toggleUser}/></li> :<li><Link to="/login">Log-in</Link> </li>}
            </ul>
          </div>
        </div>
          {openUsr ? (
        <div className={`Tlinks`}>
          <ul>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {user.role === "admin" && (<li><Link to="/admin/dashboard">Admin</Link></li>)}
            <li>
              <a>Log-Out</a>
            </li>
          </ul>
        </div>
      ) : null}
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
          { user.name ?  <img src={user.img} alt=""  onClick={toggleUser}/> :<li><Link to="/login">Log-in</Link> </li>}
        </ul>
      </div>
    </div>
    {openUsr ? (
        <div className={`Llinks`}>
          <ul>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {user.role === "admin" && (<li><Link to="/admin/dashboard">Admin</Link></li>)}
            <li>
              <a>Log-Out</a>
            </li>
          </ul>
        </div>
      ) : null}
  </> );
  } else {
    return (
      <>
      <div className="navbar">
        <div className="head">
        <i className={`fa-solid ${t}`} onClick={toggleNavigation}></i>
        <h1>Silly-Shop</h1>
        </div> 
        { user.name ?  <img src={user.img} alt="" onClick={toggleUser} /> :<li><Link to="/login">Log-in</Link> </li>}
      </div>
      {openNav ? (
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
      {openUsr ? (
        <div className={`links`}>
          <ul>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            {user.role === "admin" && (<li><Link to="/admin/dashboard">Admin</Link></li>)}
            <li>
              <a>Log-Out</a>
            </li>
          </ul>
        </div>
      ) : null}
      
    </>
    );
  }
}

export default Navbar;
