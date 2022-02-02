import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './Search.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Search() {
  const subred = window.location.href.split('/').pop();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search/${event.target[0].value}`, { replace: true });
  }

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>Find the best time for a subreddit</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subred">
            r /
            <input type="text" id="subred" name="subred" defaultValue={subred} className={styles.input} />
          </label>
          <button type="submit" className={styles.button}>SEARCH</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
