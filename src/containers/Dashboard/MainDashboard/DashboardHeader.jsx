import React, { useState } from 'react';
import './DashboardHeader.css';
import { 
  FaCalendarAlt, 
  FaBell, 
  FaSearch, 
  FaDownload, 
  FaCog, 
  FaChevronDown 
} from 'react-icons/fa';

const DashboardHeader = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New task assigned', time: '5m ago' },
    { id: 2, text: 'Meeting at 3 PM', time: '1h ago' },
    { id: 3, text: 'Project deadline updated', time: '2h ago' }
  ]);

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="header-center">
        <div className="date-picker-wrapper">
          <FaCalendarAlt className="calendar-icon" />
          <input 
            type="date" 
            defaultValue={new Date().toISOString().split('T')[0]} 
            className="date-input"
          />
        </div>
      </div>
      
      <div className="header-right">
        {/* Notifications */}
        <div className="notifications-wrapper">
          <button className="icon-button">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          <div className="notifications-dropdown">
            <h4>Notifications</h4>
            {notifications.map(notification => (
              <div key={notification.id} className="notification-item">
                <p>{notification.text}</p>
                <span>{notification.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button className="export-btn">
          <FaDownload className="export-icon" />
          <span>Export</span>
        </button>

        {/* Settings */}
        <button className="icon-button">
          <FaCog />
        </button>

        {/* User Profile */}
        <div className="user-profile-wrapper">
          <button 
            className="user-profile-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            
            <img 
              src="https://via.placeholder.com/40" 
              alt="User avatar" 
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">John Doe</span>
              <span className="user-role">Admin</span>
            </div>
            <FaChevronDown className="dropdown-icon" />
          </button>

          {showUserMenu && (
            <div className="user-menu">
              <a href="/profile">My Profile</a>
              <a href="/settings">Settings</a>
              <a href="/help">Help Center</a>
              <div className="menu-divider"></div>
              <a href="/logout" className="logout-link">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;