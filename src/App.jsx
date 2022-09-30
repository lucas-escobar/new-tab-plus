import React from 'react'
import Clock from './components/clock/Clock.jsx'
import Tasks from './components/tasks/Tasks.jsx'
import Search from './components/search/Search.jsx'
import Image from './components/image/Image.jsx'
import Bookmarks from './components/bookmarks/Bookmarks.jsx'
import Pomodoro from './components/pomodoro/Pomodoro.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  return (
    <>
    <div className="row">
      <Pomodoro workBreak={{work: 0.1, break: 0.2}} />
    </div>
    <div className="row">
      <Tasks />
      <Clock />
      <Search />
    </div>
    <div className="row">
      <Image />
      <Bookmarks />
    </div>
  </>
  )
}