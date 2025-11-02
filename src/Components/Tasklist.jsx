import React from 'react'

export default function Tasklist({tasks,updateTask, deleteTask}) {
  const toggleCompleted = (index) => {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed};
    updateTask(updatedTask,index);
  }
  return (
    <div className='task-list'>
      <ul>
        {tasks.map((task,index) => (
          <li key={index} className= {task.completed ? 'completed': ''}>
            <div>
              <span>
                {task.text} <small>({task.priority} , {task.category})</small>
              </span>
            </div>

            <div>
              <button onClick={()=>toggleCompleted(index)}>
              {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
