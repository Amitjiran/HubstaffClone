import React, { useState } from 'react';
import './FirstDashboard.css';
import { FaEllipsisV, FaPlay, FaCode, FaChrome, FaFileAlt } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import Todo_dashb from './TodoDashb';

const FirstDashboard = () => {
  const [currentTime, setCurrentTime] = useState('0:00:00');
  const [totalTime, setTotalTime] = useState('8:30:00');

// const navigate=useNavigate();
// const handleAddTodo=()=>{
//   console.log("clicked");
//   navigate('/Todo-dashb');
// }

  const todos = [
    {
      task: 'Finish project report',
      dueDate: '2024-12-10',
      priority: 'High',
      completed: false
    },
    {
      task: 'Prepare presentation',
      dueDate: '2024-12-12',
      priority: 'Medium',
      completed: true
    },
    {
      task: 'Email client feedback',
      dueDate: '2024-12-15',
      priority: 'Low',
      completed: false
    }
  ];

  const timeEntries = [
    {
      user: { initials: 'JD', name: 'John Doe' },
      date: 'Dec 4, 2024',
      start: '9:00 AM',
      end: '5:00 PM',
      duration: '8:00:00'
    },
    {
      user: { initials: 'AS', name: 'Alice Smith' },
      date: 'Dec 4, 2024',
      start: '8:30 AM',
      end: '4:30 PM',
      duration: '8:00:00'
    },
    {
      user: { initials: 'MB', name: 'Mike Brown' },
      date: 'Dec 4, 2024',
      start: '10:00 AM',
      end: '6:00 PM',
      duration: '8:00:00'
    }
  ];

  const projects = [
    {
      name: 'Website Redesign',
      color: '#4CAF50',
      timeSpent: '15:30:00',
      progress: 65
    },
    {
      name: 'Mobile App Development',
      color: '#FF9800',
      timeSpent: '23:45:00',
      progress: 40
    },
    {
      name: 'Backend API',
      color: '#9C27B0',
      timeSpent: '8:15:00',
      progress: 85
    }
  ];

  const appsAndUrls = [
    {
      icon: <FaCode />,
      name: 'Visual Studio Code',
      timeSpent: '4:30:00',
      percentage: 45
    },
    {
      icon: <FaChrome />,
      name: 'Chrome - github.com',
      timeSpent: '2:15:00',
      percentage: 25
    },
    {
      icon: <FaFileAlt />,
      name: 'Notion',
      timeSpent: '1:45:00',
      percentage: 20
    }
  ];

  return (
    <div className='wrapper'>
      <div className="dashboard-container">
        {/* <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
            <div className="date-picker">
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <img src="/default-avatar.png" alt="User" />
              <span> Doe</span>
            </div>
          </div>
        </header> */}

        <div className="dashboard-content">
          <div className="widgets-container">
            {/* Time Tracking Widget */}
            <div className="widget time-tracking">
              <div className="widget-header">
                <h3>Time Tracked</h3>
                <div className="widget-actions">
                  <button className="btn-icon"><FaEllipsisV /></button>
                </div>
              </div>
              <div className="widget-body">
                <div className="time-stats">
                  <div className="stat-item">
                    <span className="stat-label">Today</span>
                    <span className="stat-value">{totalTime}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">This Week</span>
                    <span className="stat-value">42:30:00</span>
                  </div>
                </div>
                <div className="time-entries">
                  <table className="time-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeEntries.map((entry, index) => (
                        <tr key={index}>
                          <td>
                            <div className="user-info">
                              <div className="avatar" style={{backgroundColor: `hsl(${index * 40}, 70%, 50%)`}}>
                                {entry.user.initials}
                              </div>
                              <span>{entry.user.name}</span>
                            </div>
                          </td>
                          <td>{entry.date}</td>
                          <td>{entry.start}</td>
                          <td>{entry.end}</td>
                          <td>{entry.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Projects Widget */}
            <div className="widget projects">
              <div className="widget-header">
                <h3>Projects</h3>
                <div className="widget-actions">
                  <button className="btn-icon"><FaEllipsisV /></button>
                </div>
              </div>
              <div className="widget-body">
                <div className="project-list">
                  {projects.map((project, index) => (
                    <div key={index} className="project-item">
                      <div className="project-info">
                        <div className="project-color" style={{backgroundColor: project.color}}></div>
                        <div className="project-details">
                          <h4>{project.name}</h4>
                          <div className="project-progress">
                            <div className="progress-bar" 
                                 style={{width: `${project.progress}%`, backgroundColor: project.color}}>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-time">{project.timeSpent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Apps & URLs Widget */}
            <div className="widget apps-urls">
              <div className="widget-header">
                <h3>Apps & URLs</h3>
                <div className="widget-actions">
                  <button className="btn-icon"><FaEllipsisV /></button>
                </div>
              </div>
              <div className="widget-body">
                <div className="apps-list">
                  {appsAndUrls.map((app, index) => (
                    <div key={index} className="app-item">
                      <div className="app-info">
                        <span className="app-icon">{app.icon}</span>
                        <div className="app-details">
                          <span className="app-name">{app.name}</span>
                          <div className="app-progress">
                            <div className="progress-bar" 
                                 style={{width: `${app.percentage}%`}}>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="app-time">{app.timeSpent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/*Working Todo widget */}
        {/* To-Do Widget */}
<div className="widget apps-urls">
  <div className="widget-header">
    <h3>To-Do List</h3>
    <div className="widget-actions">
      <button className="add-todo-btn" ><a href="/tododash">Add todo</a></button>
      <button className="btn-icon"><FaEllipsisV /></button>
    </div>
  </div>
 

  <div className="widget-body">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <div className="todo-info">
            <span className="todo-task">{todo.task}</span>
            <div className="todo-details">
              <span className="todo-due">Due: {todo.dueDate}</span>
              <span className={`todo-priority ${todo.priority.toLowerCase()}`}>{todo.priority}</span>
            </div>
          </div>
          <div className="todo-status">
            {todo.completed ? 'Completed' : 'Pending'}
          </div>
        </div>
      ))}
    </div>
  </div>

</div>

<div>
</div>




          </div>
        </div>

        {/* Timer Widget */}
        <div className="web-timer-widget">
          <div className="timer-header">
            <div className="timer-controls">
              <button className="timer-button">
                <FaPlay />
              </button>
              {/* <div className="timer-display">{currentTime}</div> */}
            </div>
            <div className="timer-project">
              <select defaultValue="">
                <option value="" disabled>Select a project</option>
                {projects.map((project, index) => (
                  <option key={index} value={project.name}>{project.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FirstDashboard;