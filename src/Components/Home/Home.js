import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import Footer from '../Footer/Footer';

import table from './table.png';

function Home() {
  return (
    <div>
      <Header />
      <h1>This is the home page</h1>
      <Link to="/search/javascript">Click to view our search page</Link>
      <h1>
        No reactions to your reddit posts?
      </h1>
      <h4>
        Great timing, great results! Find the best time to post on your subreddit.
      </h4>
      {/* <button>
        SHOW ME THE BEST TIME
      </button> */}
      <p>
        r/javascript
      </p>
      <img src={table} alt="main table" />
      <div id="how-it-works">
        <h3>
          How it works
        </h3>
      </div>
      <div id="about">
        <h3>
          About
        </h3>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
