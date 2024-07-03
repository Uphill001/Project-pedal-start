const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getTask = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });
  return response.json();
};

export const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
