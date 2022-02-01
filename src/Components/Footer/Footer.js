import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { ReactComponent as Logo } from './logo2.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://radulefter.co.uk/" className={styles.link1}>Radu Lefter</a>
      <Link to="/"><Logo /></Link>
      <a href="/" className={styles.link2}>Terms and Privacy</a>
    </footer>
  );
}

export default Footer;
