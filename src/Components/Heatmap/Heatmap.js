import React from 'react';
import styles from './Heatmap.module.css';

function Heatmap() {
  return (
    <div className={styles.main}>
      <div className={styles.times}>
        <span>12:00am</span>
        <span>2:00am</span>
        <span>4:00am</span>
        <span>6:00am</span>
        <span>8:00am</span>
        <span>10:00am</span>
        <span>12:00pm</span>
        <span>2:00pm</span>
        <span>4:00pm</span>
        <span>6:00pm</span>
        <span>8:00pm</span>
        <span>10:00pm</span>
      </div>
      <table className={styles.days}>
        <tbody>
          <tr>
            <td>Sunday</td>
          </tr>
          <tr>
            <td>Monday</td>
          </tr>
          <tr>
            <td>Tuesday</td>
          </tr>
          <tr>
            <td>Wednesday</td>
          </tr>
          <tr>
            <td>Thursday</td>
          </tr>
          <tr>
            <td>Friday</td>
          </tr>
          <tr>
            <td>Saturday</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Heatmap;
