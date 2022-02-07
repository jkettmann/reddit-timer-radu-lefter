import { useState, React } from 'react';
import styles from './Heatmap.module.css';
import DetailsTable from '../DetailsTable/DetailsTable';

function Heatmap({ data }) {
  // console.log(data);
  const [clicked, setClicked] = useState(false);
  const [times, setTimes] = useState(null);
  // const [oneDay, setOneDay] = useState('');
  const handleClick = (e) => {
    const day = data.find((o) => o.day === e.target.dataset.day);
    const time = day.times[e.target.dataset.index];
    setTimes(time);
    setClicked(true);
    // console.log(e.target.dataset.user);
    // console.log(e.target.id);
    e.target.style.border = '1px solid rgb(147, 145, 143)';
  };

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
        <table role="grid" className={styles.table}>
          <tbody>
            {data
              && data.map((day, i) => (
                <tr // eslint-disable-next-line react/no-array-index-key
                  key={i}
                >
                  <td className={styles.days}>{day.day}</td>
                  {day.times.map((time, index) => (
                    <td
                      role="gridcell"
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      id={`${day.day}${index}`}
                      data-day={day.day}
                      data-index={index}
                      className={time && `c${time.length.toString()}`}
                      onClick={handleClick}
                    >
                      {time ? time.length : 0}
                    </td>
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
      <div>{clicked && times && <DetailsTable results={times} />}</div>
    </div>
  );
}

export default Heatmap;
