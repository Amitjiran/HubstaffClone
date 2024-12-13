// src/components/Dashboard/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaTasks, 
  FaCalendarAlt, 
  FaChartLine, 
  FaCog, 
  FaUser, 
  FaBars, 
  FaSignOutAlt,
  FaBell,
  FaSearch
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Dashboard', icon: <FaHome /> },
    { path: '/tasks', name: 'Tasks', icon: <FaTasks /> },
    { path: '/calendar', name: 'Calendar', icon: <FaCalendarAlt /> },
    { path: '/analytics', name: 'Analytics', icon: <FaChartLine /> },
    { path: '/activity', name: 'Activity', icon: <FaChartLine /> },

  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          {!isCollapsed && <h2>TimeTracker</h2>}
          <button 
            className="collapse-btn"
            onClick={onToggle}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
          >
            <span className="icon">{item.icon}</span>
            {!isCollapsed && <span className="label">{item.name}</span>}
            {!isCollapsed && isActive(item.path) && <div className="active-indicator" />}
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className="notifications">
          <FaBell className="icon" />
          {!isCollapsed && <span className="notification-badge">3</span>}
        </div>

        <div className="user-profile">
          <img 
            src="https://via.placeholder.com/40" 
            alt="User Avatar"
            className="avatar"
          />
          {!isCollapsed && (
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">Admin</span>
            </div>
          )}
        </div>

        <div className="footer-actions">
          <Link to="/settings" className="menu-item">
            <FaCog className="icon" />
            {!isCollapsed && <span className="label">Settings</span>}
          </Link>
          <button className="menu-item logout-btn">
            <FaSignOutAlt className="icon" />
            {!isCollapsed && <span className="label">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;










