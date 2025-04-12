import React, { lazy, Suspense , useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// css
import './App.css';

// components
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// pages
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Router>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
    </Router>
  );
}

export default App;
