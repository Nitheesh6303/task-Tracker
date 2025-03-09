import React, { useState } from 'react';

function TaskTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'sample task', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Task Tracker</h1>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add Task"
            style={{ padding: '8px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '4px', flex: '1' }}
          />
          <button onClick={handleAddTask} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add Task
          </button>
        </div>
        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                borderBottom: '1px solid #eee',
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task.id)}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                />
                <span>{task.text}</span>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#d9534f',
                }}
              >
                &#x1F5D1;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskTracker;