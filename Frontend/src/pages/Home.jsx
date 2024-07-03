import React from 'react';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Task Management Application</h1>
      <TaskList />
    </div>
  );
};

export default Home;
