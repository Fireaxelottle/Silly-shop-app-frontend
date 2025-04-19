import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  let b = "fa-bars";
  let a = "fa-bars-staggered";
  const [t, setT] = useState(b);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggle = () => {
    if (t === a) {
      setT(b);
      setOpen(false);
    } else {
      setT(a);
      setOpen(true);
    }
  };

  const screenWidth = useSelector((state) => state.ui.screenWidth);

  if (screenWidth < 750) {
    return (
      <>
        <div className="navbar">
          <h1>Silly-Shop</h1>
          <i className={`fa-solid ${t}`} onClick={toggle}></i>
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
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    );
  } else  {
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
  }
//    else {
//     return (
//       <>
//         <div className="navbar">
//           <h1>Silly-Shop</h1>
//           <div className="links">
//             <ul>
//               <li>
//                 <Link to="/">
//                   <i class="fa-solid fa-house"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cart">
//                   <i class="fa-solid fa-cart-shopping"></i>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/search">
//                   <i class="fa-solid fa-magnifying-glass"></i>
//                 </Link>
//               </li>
//             </ul>
//             { user ? "" :
//               <ul className="user">
//               <li>
//                 <Link to="/login">Log-in</Link>
//               </li>
//               <li>
//                 <Link to="/signup">Sign-up</Link>
//               </li>
//             </ul>}
//           </div>
//         </div>
//       </>
//     );
//   }
}

export default Navbar;
