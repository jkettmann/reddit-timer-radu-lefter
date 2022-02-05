import React from 'react';
import styles from './Heatmap.module.css';

function Heatmap({ data }) {
//   const myObj = {
//     Sun: {},
//     Mon: {},
//     Tue: {},
//     Wed: {},
//     Thu: {},
//     Fri: {},
//     Sat: {},
//   };

  const myData = (posts) => {
    const myObj = [
      {
        day: 'Sun',
        times: [],
      },
      {
        day: 'Mon',
        times: [],
      },
      {
        day: 'Tue',
        times: [],
      },
      {
        day: 'Wed',
        times: [],
      },
      {
        day: 'Thu',
        times: [],
      },
      {
        day: 'Fri',
        times: [],
      },
      {
        day: 'Sat',
        times: [],
      },
    ];
    posts.forEach((post) => {
      let hour = new Date(post.data.created * 1000).toString().slice(16, 18);
      hour = Number.parseInt(hour, 10);
      const day = new Date(post.data.created * 1000).toString().slice(0, 3);
      const obj = myObj.find((o) => o.day === day);
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
      <div>
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
      <div>
        <table>
          <tbody>
            {/* {data && data.map((post) => (
              <tr key={post.data.id}>
                <td>{new Date(post.data.created * 1000).toString()}</td>
              </tr>
            ))} */}
            {/* {data && myData(data).map((day) => (
              <tr>
                <td>Saturday</td>
                <td>{Object.size(day.Sat[0])}</td>
              </tr>
            ))} */}
            {/* {Object.keys(myData(data)).map((day) => (
              <tr>
                <td>{day}</td>
                {console.log(day)}
                {Object.keys(day).map((time) => (
                  <td>{time[0]}</td>
                ))}
              </tr>
            ))} */}
          </tbody>
          {/* <tbody>
            <tr>
              <td>
                Sunday
              </td>
            </tr>
            <tr>
              <td>
                Monday
              </td>
            </tr>
            <tr>
              <td>
                Tuesday
              </td>
            </tr>
            <tr>
              <td>
                Wednesday
              </td>
            </tr>
            <tr>
              <td>
                Thursday
              </td>
            </tr>
            <tr>
              <td>
                Friday
              </td>
            </tr>
            <tr>
              <td>
                Saturday
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Heatmap;
