import React from 'react'

export default function ProgressTracker({tasks}) {
  const completedTask = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const percentage = totalTasks == 0 ? 0 : (completedTask/totalTasks)*100;
  return (
    <div className='progress-tracker'>
      <p>
        {completedTask} out of {totalTasks} tasks completed
      </p>
      <div className='progress-bar'>
        <div className='progress'
        style={{width: `${percentage}%`}}>
        </div>
      </div>
    </div>
  )
}
