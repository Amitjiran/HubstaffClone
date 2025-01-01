'use client';

import React from 'react';
import './ProjectDashboard.css';
import { Search, Clock, Bell, Gift, MoreVertical, Settings } from 'lucide-react';

function ProjectDashboard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="header-button">
              <Clock className="header-button-icon" />
            </button>
            <span>0:00:00</span>
          </div>
          <div className="header-right">
            <button className="header-button">
              <Search className="header-button-icon" />
            </button>
            <button className="header-button">
              <Bell className="header-button-icon" />
            </button>
            <button className="header-button">
              <Gift className="header-button-icon" />
            </button>
            <button className="header-button">
              <Settings className="header-button-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <h1 className="title">Projects</h1>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab-button">ACTIVE (1)</button>
          <button className="tab-button">ARCHIVED (0)</button>
        </div>

        {/* Search and Import */}
        <div className="search-import-container">
          <div className="search-container">
            <Search className="search-icon" />
            <input type="text" placeholder="Search projects" className="search-input" />
          </div>
          <button className="import-button">Import projects</button>
        </div>

        {/* Projects Table */}
        <table className="table">
          <thead className="table-head">
            <tr>
              {['Name', 'Teams', 'Members', 'To-dos', 'Budget', 'Member limits', ''].map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="name-cell">
                <div className="name-icon">
                  <span className="name-icon-text">D</span>
                </div>
                <span>Developers</span>
              </td>
              <td className="name-cell">
                <div className="teams-icon">
                  <span>B</span>
                </div>
                <span className="teams-text">+2</span>
              </td>
              <td></td>
              <td>No to-dos</td>
              <td></td>
              <td>None</td>
              <td>
                <button className="more-button">
                  <MoreVertical className="more-icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="footer-text">Showing 1 of 1 project</div>
      </main>
    </div>
  );
}

export default ProjectDashboard;
