import { useEffect, useState, React } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Search.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Search() {
  const params = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(params.javascript);

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search/${event.target[0].value}`, { replace: true });
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    setQuery(params.javascript);
  }, [params]);

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>Find the best time for a subreddit</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subred">
            r /
            <input type="text" id="subred" name="subred" value={query} className={styles.input} onChange={handleChange} />
          </label>
          <button type="submit" className={styles.button}>SEARCH</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
