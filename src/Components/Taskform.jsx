import React from 'react'
import { useState } from 'react';
export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("General")

    const handlesubmit = (e)=>{
        e.preventDefault();
        addTask({text:task, priority, category, completed: false})
        //Reset State:
        setTask(" ");
        setPriority("Medium")
        setCategory('General')
    }

  return (
    <form onSubmit={handlesubmit} className='task-form'>
    <div id='inp'>
      <input type="text" placeholder="Enter your task to do..."
      value={task}
       onChange={(e)=>setTask(e.target.value)} />
      <span><button type="submit">Add task</button></span>
    </div>
      
    <div id='btns'>
      <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    
      <select value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
    </div>  
    </form>
  )
}
