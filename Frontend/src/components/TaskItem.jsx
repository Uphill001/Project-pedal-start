// frontend/src/components/TaskItem.jsx

import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">Due Date: {task.dueDate}</p>
    </div>
  );
}

export default TaskItem;
