import React from 'react';
import styles from './Heatmap.module.css';

function Heatmap({ data }) {
  const myData = (posts) => {
    const myObj = [
      {
        day: 'Sunday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Monday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Tuesday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Wednesday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Thursday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Friday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
      {
        day: 'Saturday',
        times: [null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null],
      },
    ];
    posts.forEach((post) => {
      let hour = new Date(post.data.created * 1000).toString().slice(16, 18);
      hour = Number.parseInt(hour, 10);
      const day = new Date(post.data.created * 1000).toString().slice(0, 3);
      const obj = myObj.find((o) => o.day.slice(0, 3) === day);
      if (!obj.times[hour]) {
        obj.times[hour] = [];
      }
      obj.times[hour].push({
        ...obj.times[hour],
        day: new Date(post.data.created * 1000).toString().slice(0, 3),
        time: new Date(post.data.created * 1000).toString().slice(16, 21),
        title: post.data.title,
        url: post.data.url,
        author: post.data.author,
        score: post.data.acore,
        comments: post.data.num_comments,
        id: post.data.id,
      });
      // myObj[new Date(post.data.created * 1000).toString().slice(0, 3)][hour].push(
      // {
      //   day: new Date(post.data.created * 1000).toString().slice(0, 3),
      //   time: new Date(post.data.created * 1000).toString().slice(16, 21),
      //   title: post.data.title,
      //   url: post.data.url,
      //   author: post.data.author,
      //   score: post.data.acore,
      //   comments: post.data.num_comments,
      //   id: post.data.id,
      // }
      // );

    //   myObj.Sunday = {
    //     day: new Date(post.data.created * 1000).toString().slice(0, 4),
    //     time: new Date(post.data.created * 1000).toString().slice(16, 22),
    //     title: post.data.title,
    //     url: post.data.url,
    //     author: post.data.author,
    //     score: post.data.acore,
    //     comments: post.data.num_comments,
    //   };
    });
    return myObj;
  };
  console.log(myData(data));
  return (
    <div className={styles.main}>
      <div className={styles.hours}>
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
      <div className={styles.heatmap}>
        <table>
          <tbody>
            {data && myData(data).map((day) => (
              <tr>
                <td className={styles.days}>{day.day}</td>
                {day.times.map((time) => (
                  <td>{time ? time.length : 0 }</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.locale}>
        All times are shown in your timezone:
        <strong>{Intl.DateTimeFormat().resolvedOptions().timeZone}</strong>
      </div>
    </div>
  );
}

export default Heatmap;
