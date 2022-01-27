import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Search from '../Search/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
