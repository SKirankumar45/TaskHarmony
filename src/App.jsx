
import React, { use, useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'
import './Styles.css'

export default function App() {
  const [tasks,setTasks] = useState([]);
  const [isLight,setLight] = useState(true);

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

  const clearTasks = () => {
    setTasks([]);
  }

  const toggle = () => {
    if(isLight){
      document.body.style.backgroundColor = "rgba(106, 106, 106, 1)";
      setLight(false);
    }else{
      document.body.style.backgroundColor = "white";
      setLight(true);
    }
  }

  return (
    <div className='App'>
      <header>
      <h1 className='title'>Task Harmony &#128198;&#x2705;</h1>
      <p className='tagline'>Your Friendly Task Manager</p>
      <span><button onClick={toggle} className={"change-theme"}>change theme</button></span>
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}/>
      <ProgressTracker tasks = {tasks}/>
      <button onClick={clearTasks} id="btn">Clear all tasks</button>
    </div>
  )
}
