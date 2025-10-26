
import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import './Styles.css'

export default function App() {
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks",JSON.stringify(tasks))
  })

  const addTask = (task) => {
    setTasks([...tasks,task])
  }
  
  const updateTask = (updatedTask,index) => {
      const newTasks = [...tasks];
      newTasks[index] = updatedTask;
      setTasks(newTasks);
  }
  
  const deleteTask = (index) => {
    setTasks(tasks.filter((_ , i) => i != index));
  }

  return (
    <div>
      <h1>Task Harmony</h1>
      <p>Your Friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      <button>Clear all tasks</button>
    </div>
  )
}
