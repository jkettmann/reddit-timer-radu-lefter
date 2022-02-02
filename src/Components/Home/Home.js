import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Home.module.css';
import table from './table.png';

function Home() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>
          No reactions to your reddit posts?
        </h1>
        <div className={styles.subtitle}>
          Great timing, great results! Find the best time to post on your subreddit.
        </div>
        <br />
        <br />
        <Link to="/search/javascript">
          <button type="button" className={styles.button}>
            SHOW ME THE BEST TIME
          </button>
        </Link>
        <br />
        <p>
          r/javascript
        </p>
        <br />
        <br />
        <Link to="/search/javascript">
          <img src={table} alt="main table" className={styles.image} />
        </Link>
        <section id="how-it-works">
          <h2>
            How it works
          </h2>
        </section>
        <section id="about">
          <h2>
            About
          </h2>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
