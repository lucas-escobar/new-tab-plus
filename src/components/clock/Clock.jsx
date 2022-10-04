import React from 'react'
import './clock.css'

const initialDate = new Date();

export default function Clock() {
  const [now, setNow] = React.useState({
    hours: addZero(initialDate.getHours()),
    minutes: addZero(initialDate.getMinutes()),
    date: initialDate.toDateString()
  })

  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  function updateTime() {
    const date = new Date();
    setNow({
      hours: addZero(date.getHours()),
      minutes: addZero(date.getMinutes()),
      date: date.toDateString()
    });
  }

  React.useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='Clock'>
      <div className='Clock__Time'>{now.hours}:{now.minutes}</div>
      <div className="Clock__Date">{now.date}</div>
    </section>
  );
}