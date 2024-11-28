// src/components/Dashboard/DashboardGrid.jsx
import React from 'react';
import './DashboardGrid.css';

const DashboardGrid = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-info">
            <span className="stat-title">Hours tracked</span>
            <div className="stat-value">00:00</div>
          </div>
          <div className="stat-trend">
            <span className="trend-value">0%</span>
          </div>
        </div>
        <div className="stat-chart">
          <div className="empty-state">
            <span>No data available</span>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-info">
            <span className="stat-title">Activity</span>
            <div className="stat-value">0%</div>
          </div>
          <div className="stat-trend">
            <span className="trend-value">0%</span>
          </div>
        </div>
        <div className="stat-chart">
          <div className="empty-state">
            <span>No data available</span>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-info">
            <span className="stat-title">Amount spent</span>
            <div className="stat-value">$0.00</div>
          </div>
          <div className="stat-trend">
            <span className="trend-value">0%</span>
          </div>
        </div>
        <div className="stat-chart">
          <div className="empty-state">
            <span>No data available</span>
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <div className="stat-info">
            <span className="stat-title">Projects tracked</span>
            <div className="stat-value">0</div>
          </div>
        </div>
        <div className="stat-chart">
          <div className="empty-state">
            <span>No data available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
