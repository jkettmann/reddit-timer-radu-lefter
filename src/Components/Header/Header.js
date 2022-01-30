import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link to="/"><Logo /></Link>
      </div>
      <div className={styles.links}>
        <Link to="search">Search</Link>
        <a href="#how-it-works">How it works</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
