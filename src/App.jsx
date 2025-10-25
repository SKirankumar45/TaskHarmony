
import React from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  return (
    <div>
      <h1>Task Harmony</h1>
      <p>Our Friendly Task Manager</p>
      <Taskform/>
      <Tasklist/>
      <ProgressTracker/>
      <button>Clear all tasks</button>
    </div>
  )
}
