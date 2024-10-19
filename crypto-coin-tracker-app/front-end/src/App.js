import './styles/cryptoCards.css';
import CryptoDashboard from './components/CryptoDashboard';
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <>
    <Router>
    <Navigation/>
    
  <Routes>
    <Route path="/" element={<CryptoDashboard/>}/>
    <Route path="/Watchlist" element={<Watchlist/>}/>
    <Route path="*" element={<div>Address Not Found!</div>}/>

  </Routes>
    </Router>
     
    </>
  );
}

export default App;
