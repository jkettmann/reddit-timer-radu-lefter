import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Search() {
  return (
    <div>
      <Header />
      <h1>This is the Search page</h1>
      <Link to="/">Click to view our Home page</Link>
    </div>
  );
}

export default Search;
