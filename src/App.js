import React, { lazy, Suspense , useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
