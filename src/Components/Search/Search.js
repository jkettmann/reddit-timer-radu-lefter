import { useEffect, useState, React } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Search.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Search() {
  const color = 'rgb(252, 190, 77)';
  const params = useParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(params.javascript);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search/${event.target[0].value}`, { replace: true });
    try {
      const res = await fetch(`https://www.reddit.com/r/${query}/top.json?t=year&limit=100`, {
        method: 'GET',
      });
      const resJson = await res.json();
      if (resJson) {
        setData(resJson);
        setLoading(false);
        console.log(data);
      } else {
        setError('Some error occured');
      }
    } catch (err) {
      console.log(error);
    }
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
        {loading && <ClipLoader color={color} loading={loading} size={100} speedMultiplier={0.5} />}
      </div>
      <Footer />
    </div>
  );
}

export default Search;
