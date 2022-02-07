import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/"><Logo /></Link>
      </div>
      <div className={styles.links}>
        <Link to="/search/javascript">Search</Link>
        <a href="/#how-it-works">How it works</a>
        <a href="/#about">About</a>
      </div>
    </header>
  );
}

export default Header;
