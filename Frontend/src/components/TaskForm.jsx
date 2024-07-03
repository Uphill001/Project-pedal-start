import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, createTask, updateTask } from '../services/taskServices.js';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchTask();
    }
  }, [id]);

  const fetchTask = async () => {
    const task = await getTask(id);
    setTask(task);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Task' : 'New Task'}</h1>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 mb-2 w-full"
        required
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">{id ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
