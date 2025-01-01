import React from 'react';
import './Calanderhd.css';

const CalendarHeader = () => {
  return (
    <div className="calendar-header">
      <div className="header-top">
        <div className="timer">
          <span>0:00:00</span>
          <button className="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
        <div className="action-icons">
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </button>
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </button>
          <button className="profile-button">P</button>
        </div>
      </div>

      <div className="header-main">
        <h1>Schedules</h1>
        <button className="actions-button">Actions</button>
      </div>

      <div className="calendar-controls">
        <div className="date-navigation">
          <button className="nav-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="nav-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="date-range">
            <span>Sun, Dec 1, 2024 - Tue, Dec 31, 2</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <button className="today-button">Today</button>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>TEAMS</label>
            <select>
              <option>Select teams</option>
            </select>
          </div>
          <div className="filter-group">
            <label>MEMBERS</label>
            <select>
              <option>1 member</option>
            </select>
          </div>
        </div>

        <div className="events-filter">
          <span>EVENTS:</span>
          <button className="event-button">Jobs</button>
          <button className="event-button">Shifts</button>
        </div>
      </div>

      <div className="view-controls">
        <span>View:</span>
        <select>
          <option>Month</option>
          <option>Week</option>
          <option>Day</option>
        </select>
      </div>
    </div>
  );
};

export default CalendarHeader;

