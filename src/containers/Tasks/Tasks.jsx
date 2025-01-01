import React, { useState } from 'react';
import './Tasks.css';

const initialColumns = [
  {
    id: 'todo',
    title: 'TO DO',
    tasks: [
      { id: 't1', title: 'Working on React.js', assignee: 'A' },
      { id: 't2', title: 'Search for an alternative of the fixed height in Light homepage', assignee: 'U' },
      { id: 't3', title: 'Add verification for email and phone number', assignee: 'U' },
    ]
  },
  {
    id: 'doing',
    title: 'DOING NOW',
    tasks: [
      { id: 't4', title: 'adding dynamic infinity functions to processing bar', assignee: 'A' },
      { id: 't5', title: 'working on how to reduce time for output generations', assignee: 'A' },
    ]
  },
  {
    id: 'completed',
    title: 'COMPLETED',
    tasks: [
      { id: 't6', title: 'Add code to let user know when the listing is live on carrer page', assignee: 'A' },
      { id: 't7', title: 'merging chat bot and telegram bot', assignee: 'A' },
    ]
  },
  {
    id: 'someday',
    title: 'SOMEDAY/MAYBE',
    tasks: [
      { id: 't8', title: 'send some assignment for ca listing', assignee: 'A' },
      { id: 't9', title: 'add censor for the output gifs captions', assignee: 'A' },
    ]
  },
  {
    id: 'waiting',
    title: 'WAITING',
    tasks: [
      { id: 't10', title: 'tttteeeesstttt', assignee: 'A' },
      { id: 't11', title: 'new backend apis integration', assignee: 'A' },
    ]
  }
];

function Tasks() {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedTask, setDraggedTask] = useState(null);
  const [selectedView, setSelectedView] = useState('Kanban');

  const handleDragStart = (e, task, columnId) => {
    setDraggedTask({ task, sourceColumnId: columnId });
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', task.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    if (draggedTask && draggedTask.sourceColumnId !== targetColumnId) {
      setColumns(prevColumns => {
        const newColumns = prevColumns.map(column => ({
          ...column,
          tasks: column.id === draggedTask.sourceColumnId
            ? column.tasks.filter(task => task.id !== draggedTask.task.id)
            : column.tasks
        }));

        const targetColumnIndex = newColumns.findIndex(column => column.id === targetColumnId);
        newColumns[targetColumnIndex].tasks.push(draggedTask.task);

        return newColumns;
      });
    }
    setDraggedTask(null);
  };

  const addTask = (columnId) => {
    const newTaskTitle = prompt('Enter new task title:');
    if (newTaskTitle) {
      setColumns(prevColumns => {
        return prevColumns.map(column => {
          if (column.id === columnId) {
            return {
              ...column,
              tasks: [...column.tasks, { id: `t${Date.now()}`, title: newTaskTitle, assignee: 'A' }]
            };
          }
          return column;
        });
      });
    }
  };

  return (
    <div className="kanban-board">
      <header className="board-header">
        <div className="title-container">
          <h1 className="board-title">Tasks</h1>
          <div className="hubstaff-badge">
            <span className="hubstaff-icon"></span>
            Hubstaff Tasks
          </div>
        </div>

        <div className="controls-container">
          <div className="project-selector">
            <button className="project-button">
              <span className="project-icon"></span>
              Developers
              <span className="dropdown-icon">▼</span>
            </button>
          </div>

          <div className="view-selector">
            <button 
              className={`view-button ${selectedView === 'List' ? 'active' : ''}`}
              onClick={() => setSelectedView('List')}
            >
              List
            </button>
            <button 
              className={`view-button ${selectedView === 'Kanban' ? 'active' : ''}`}
              onClick={() => setSelectedView('Kanban')}
            >
              Kanban
            </button>
            <button 
              className={`view-button ${selectedView === 'Timeline' ? 'active' : ''}`}
              onClick={() => setSelectedView('Timeline')}
            >
              Timeline
            </button>
          </div>
        </div>
      </header>

      <div className="board-columns">
        {columns.map(column => (
          <div 
            key={column.id} 
            className="board-column"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="column-header">
              <h2>{column.title}</h2>
              <button className="add-task-button" onClick={() => addTask(column.id)}>+</button>
            </div>
            <div className="task-list">
              {column.tasks.map(task => (
                <div 
                  key={task.id} 
                  className="task-card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, column.id)}
                >
                  <span className="task-assignee">{task.assignee}</span>
                  <span className="task-title">{task.title}</span>
                </div>
              ))}
            </div>
            <button className="add-task-text-button" onClick={() => addTask(column.id)}>
              Add a task...
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;

