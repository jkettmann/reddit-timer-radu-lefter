import { useRef, useState, React } from 'react';
import styles from './Heatmap.module.css';
import DetailsTable from '../DetailsTable/DetailsTable';

function Heatmap({ data }) {
  // console.log(data);
  const table = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [times, setTimes] = useState(null);
  const handleClick = (e) => {
    const day = data.find((o) => o.day === e.target.dataset.day);
    const time = day.times[e.target.dataset.index];
    if (time) { time.sort((a, b) => a.time.localeCompare(b.time)); }
    setTimes(time);
    setClicked(true);
    for (let i = 0; i < table.current.children[0].children.length; i += 1) {
      for (let y = 0; y < table.current.children[0].children[i].children.length; y += 1) {
        table.current.children[0].children[i].children[y].style.border = 'none';
      }
    }
    // table.current.children[0].children \ .style.border = 0;
    for (let i = 0; i < table.current.children[0].children.length; i += 1) {
      for (let y = 0; y < table.current.children[0].children[i].children.length; y += 1) {
        table.current.children[0].children[i].children[y].addEventListener('mouseover', () => { table.current.children[0].children[i].children[y].style.border = '1px solid rgb(147, 145, 143)'; });
        table.current.children[0].children[i].children[y].addEventListener('mouseleave', () => { table.current.children[0].children[i].children[y].style.border = 'none'; });
      }
    }
    e.target.style.border = '1px solid rgb(147, 145, 143)';
    e.target.addEventListener('mouseleave', () => { e.target.style.border = '1px solid rgb(147, 145, 143)'; });
    // console.log(table.current.children[0].children[0]);
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
        <table role="grid" className={styles.tableH} ref={table}>
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
