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
          <div>
            Great timing, great results! Find the best time to post on your subreddit.
          </div>
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
        <section className={styles.section}>
          <article id="how-it-works" className={styles.subtitle}>
            <h2 className={styles.headings}>
              How it works
            </h2>
            <div>
              • We find the 500 top posts from the past year for a subreddit.
            </div>
            <div>
              • The data is visualized in a heatmap grouped by weekday and hour of the day.
            </div>
            <div>
              • See immediately when to submit your reddit post.
            </div>
          </article>
          <br />
          <br />
          <br />
          <article id="about" className={styles.subtitle}>
            <h2 className={styles.headings}>
              About
            </h2>
            <div>
              This app was created during a course on
              <a href="https://profy.dev"> profy.dev </a>
              with the goal
              to implement a pixel-perfect real-world application with professional
              workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests
              and code reviews.
              <a href="https://profy.dev/employers"> Click here for more information.</a>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
