import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from './logo2.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://profy.dev/employers" className={styles.link1}>profy.dev</a>
      <Link to="/"><Logo /></Link>
      <Link to="/terms" className={styles.link2}>Terms & Privacy</Link>
    </footer>
  );
}

export default Footer;
