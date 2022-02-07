import React from 'react';
import styles from './DetailsTable.module.css';

function DetailsTable({ results }) {
  return (
    <div className={styles.table}>
      <h3>Posts</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time posted</th>
            <th>Score</th>
            <th>Comments</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody>
          {results
            && results.map((result, i) => (
              <tr
                // eslint-disable-next-line react/no-array-index-key
                key={i}
              >
                <td>{result.title}</td>
                <td>{result.time}</td>
                <td>{result.score}</td>
                <td>{result.comments}</td>
                <td>{result.author}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsTable;
