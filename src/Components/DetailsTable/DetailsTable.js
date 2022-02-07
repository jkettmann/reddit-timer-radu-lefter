import React from 'react';
import styles from './DetailsTable.module.css';

function DetailsTable({ results }) {
  return (
    <div className={styles.main}>
      <h3>Posts</h3>
      <table className={styles.table}>
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
                <td style={{ textAlign: 'left' }}>
                  <a href={result.url} target="_blank" rel="noopener noreferrer">
                    {result.title.length <= 50
                      ? result.title
                      : `${result.title.slice(0, 50)}...`}
                  </a>
                </td>
                <td>{result.time}</td>
                <td>{result.score}</td>
                <td>{result.comments}</td>
                <td><a href={result.profile} target="_blank" rel="noopener noreferrer">{result.author}</a></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailsTable;
