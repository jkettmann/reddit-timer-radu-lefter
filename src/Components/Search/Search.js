import {
  useEffect, useState, React, useCallback,
} from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import styles from './Search.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Heatmap from '../Heatmap/Heatmap';

function Search() {
  const color = 'rgb(252, 190, 77)';
  const { subreddit: initialSubreddit } = useParams();
  const navigate = useNavigate();

  const [subred, setSubred] = useState(initialSubreddit);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const parseData = (fetchedPosts) => {
    const myObj = [
      {
        day: 'Sunday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Monday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Tuesday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Wednesday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Thursday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Friday',
        times: new Array(24).fill(null, 0, 24),
      },
      {
        day: 'Saturday',
        times: new Array(24).fill(null, 0, 24),
      },
    ];
    fetchedPosts.forEach((post) => {
      let hour = new Date(post.data.created * 1000).toString().slice(16, 18);
      hour = Number.parseInt(hour, 10);
      const day = new Date(post.data.created * 1000).toString().slice(0, 3);
      const obj = myObj.find((o) => o.day.slice(0, 3) === day);
      if (!obj.times[hour]) {
        obj.times[hour] = [];
      }
      obj.times[hour].push({
        day: new Date(post.data.created * 1000).toString().slice(0, 3),
        time: new Date(post.data.created * 1000).toString().slice(16, 21),
        title: post.data.title,
        url: `https://reddit.com${post.data.permalink}`,
        author: post.data.author,
        profile: `https://reddit.com/user/${post.data.author}`,
        score: post.data.score,
        comments: post.data.num_comments,
        id: post.data.id,
      });
    });
    return myObj;
  };

  const fetchData = useCallback(async (subreddit, prevPosts = [], after = null) => {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
    if (after) {
      url += `&after=${after}`;
    }
    const response = await fetch(url);
    const { data } = await response.json();
    const allPosts = prevPosts.concat(data.children);

    const noMorePosts = data && data.dist < 100;
    const limitReached = allPosts.length >= 100;
    if (noMorePosts || limitReached) {
      setLoading(false);
      // console.log(allPosts);
      return setPosts(parseData(allPosts));
    }

    return fetchData(subreddit, allPosts, data.after);
  }, []);

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
        {posts && <Heatmap data={posts} />}
      </div>
      <Footer />
    </div>
  );
}

export default Search;
