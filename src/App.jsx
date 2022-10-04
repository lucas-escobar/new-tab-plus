import React from 'react'
import Clock from './components/clock/Clock.jsx'
import Tasks from './components/tasks/Tasks.jsx'
import Search from './components/search/Search.jsx'
import Image from './components/image/Image.jsx'
import Bookmarks from './components/bookmarks/Bookmarks.jsx'
import Pomodoro from './components/pomodoro/Pomodoro.jsx'
import Calendar from './components/calendar/Calendar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  return (
    <>
    <div className="Row">
      <Pomodoro workBreak={{work: 25, break: 5}} />
      <Calendar />
    </div>
    <div className="Row">
      <Tasks />
      <Clock />
      <Search />
    </div>
    <div className="Row">
      <Image />
      <Bookmarks />
    </div>
  </>
  )
}