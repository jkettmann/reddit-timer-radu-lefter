import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div>
      <h1>This is the Search page</h1>
      <Link to="/">Click to view our Home page</Link>
    </div>
  );
}

export default Search;
