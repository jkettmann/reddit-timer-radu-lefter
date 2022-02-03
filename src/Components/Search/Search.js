import { useEffect, useState, React } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Search.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Search() {
  const color = 'rgb(252, 190, 77)';
  const { subreddit: initialSubreddit } = useParams();
  const navigate = useNavigate();

  const [subred, setSubred] = useState(initialSubreddit);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData(url) {
    const response = await fetch(url);
    return response.json().then((fdata) => {
      setData(fdata);
      setLoading(false);
    }).catch((error) => {
      throw new Error(error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${subred}`);
    getData(`https://www.reddit.com/r/${subred}/top.json?t=year&limit=100`);
  };

  function handleChange(event) {
    setSubred(event.target.value);
  }

  useEffect(() => {
    setSubred(initialSubreddit);
    getData(`https://www.reddit.com/r/${initialSubreddit}/top.json?t=year&limit=100`);
  }, [initialSubreddit]);

  console.log(data);
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>Find the best time for a subreddit</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subred">
            r /
            <input type="text" id="subred" name="subred" value={subred} className={styles.input} onChange={handleChange} />
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
