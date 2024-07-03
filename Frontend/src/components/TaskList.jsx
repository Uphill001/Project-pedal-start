// frontend/src/components/TaskList.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/taskServices';
import TaskItem from './TaskItem';
import '../TaskList.css'; // Import your updated CSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="task-list-container">
      <h1 className="task-list-title">Task List</h1>
      <Link to="/new-task" className="add-task-button">Add New Task</Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <TaskItem task={task} />
            <div className="task-buttons">
              <button onClick={() => handleDelete(task._id)} className="delete-button">Delete</button>
              <Link to={`/edit-task/${task._id}`} className="edit-button">Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
