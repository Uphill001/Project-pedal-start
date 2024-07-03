import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTask } from '../services/taskServices.js';

const TaskDetail = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    const task = await getTask(id);
    setTask(task);
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetail;
