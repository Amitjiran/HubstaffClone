// src/components/Dashboard/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <>
      <button 
        className="hamburger-button"
        onClick={onToggle}
      >
        <div className={`hamburger-icon ${isCollapsed ? 'collapsed' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="org-panel">
          <div className="org-selector">
            <div className="org-name">
              <span className="org-icon">O</span>
              <span className="org-text">Organization name</span>
            </div>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <a href="#" className="nav-item active">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Dashboard</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">📈</span>
              <span className="nav-text">Activity</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">🖼️</span>
              <span className="nav-text">Screenshots</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">🔗</span>
              <span className="nav-text">Apps & URLs</span>
            </a>
          </div>

          <div className="nav-section">
            <div className="section-title">ANALYZE</div>
            <a href="#" className="nav-item">
              <span className="nav-icon">📊</span>
              <span className="nav-text">Reports</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">💰</span>
              <span className="nav-text">Budgets</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">⏰</span>
              <span className="nav-text">Time & activities</span>
            </a>
          </div>

          <div className="nav-section">
            <div className="section-title">MANAGE</div>
            <a href="#" className="nav-item">
              <span className="nav-icon">👥</span>
              <span className="nav-text">Members</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">📂</span>
              <span className="nav-text">Projects</span>
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">⚙️</span>
              <span className="nav-text">Settings</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;










