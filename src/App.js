import React, { lazy, Suspense ,useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setScreenWidth } from './redux/uiSlice';

// css
import './App.css';

// components
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Cart from './pages/Cart';


// pages
const Home = lazy(() => import('./pages/Home'));


function App() {

  const dispatch = useDispatch();

    useEffect(() => {
      const handleResize = () => {
        dispatch(setScreenWidth(window.innerWidth));
      };
  
      window.addEventListener('resize', handleResize);
      // Initial dispatch
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);

  return (
    <Router>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
    </Router>
  );
}

export default App;
