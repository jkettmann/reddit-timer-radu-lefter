import {
  useEffect, useState, React, useCallback,
} from 'react';
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
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async (subreddit, prevPosts = [], after = null) => {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
    if (after) {
      url += `&after=${after}`;
    }
    const response = await fetch(url);
    const { data } = await response.json();
    const allPosts = prevPosts.concat(data.children);

    const noMorePosts = data && data.dist < 100;
    const limitReached = allPosts.length >= 500;
    if (noMorePosts || limitReached) {
      setLoading(false);
      return setPosts(allPosts);
    }

    return fetchData(subreddit, allPosts, data.after);
  }, []);

  // async function getData(subreddit, prevPosts = [], after = null) {
  //   let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
  //   if (after) {
  //     url += `&after=${after}`;
  //   }
  //   const response = await fetch(url);
  //   const { data } = await response.json();
  //   const allPosts = prevPosts.concat(data.children);

  //   const noMorePosts = data && data.dist < 100;
  //   const limitReached = allPosts.length >= 500;
  //   if (noMorePosts || limitReached) {
  //     setLoading(false);
  //     return setPosts(allPosts);
  //   }

  //   return getData(subreddit, allPosts, data.after);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${subred}`);
    fetchData(subred);
  };

  function handleChange(event) {
    setSubred(event.target.value);
  }

  useEffect(() => {
    setSubred(initialSubreddit);
    fetchData(initialSubreddit);
  }, [initialSubreddit, fetchData]);

  // console.log(posts);
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
      {posts[0].data.author}
      <Footer />
    </div>
  );
}

export default Search;
