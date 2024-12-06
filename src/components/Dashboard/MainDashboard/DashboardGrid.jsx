// // src/components/Dashboard/DashboardGrid.jsx
// import React from 'react';
// import './DashboardGrid.css';

// const DashboardGrid = () => {
//   return (
//     <div className="stats-grid">
//       <div className="stat-card">
//         <div className="stat-header">
//           <div className="stat-info">
//             <span className="stat-title">Hours tracked</span>
//             <div className="stat-value">00:00</div>
//           </div>
//           <div className="stat-trend">
//             <span className="trend-value">0%</span>
//           </div>
//         </div>
//         <div className="stat-chart">
//           <div className="empty-state">
//             <span>No data available</span>
//           </div>
//         </div>
//       </div>

//       <div className="stat-card">
//         <div className="stat-header">
//           <div className="stat-info">
//             <span className="stat-title">Activity</span>
//             <div className="stat-value">0%</div>
//           </div>
//           <div className="stat-trend">
//             <span className="trend-value">0%</span>
//           </div>
//         </div>
//         <div className="stat-chart">
//           <div className="empty-state">
//             <span>No data available</span>
//           </div>
//         </div>
//       </div>

//       <div className="stat-card">
//         <div className="stat-header">
//           <div className="stat-info">
//             <span className="stat-title">Amount spent</span>
//             <div className="stat-value">$0.00</div>
//           </div>
//           <div className="stat-trend">
//             <span className="trend-value">0%</span>
//           </div>
//         </div>
//         <div className="stat-chart">
//           <div className="empty-state">
//             <span>No data available</span>
//           </div>
//         </div>
//       </div>

//       <div className="stat-card">
//         <div className="stat-header">
//           <div className="stat-info">
//             <span className="stat-title">Projects tracked</span>
//             <div className="stat-value">0</div>
//           </div>
//         </div>
//         <div className="stat-chart">
//           <div className="empty-state">
//             <span>No data available</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardGrid;




import React from 'react';
import './DashboardGrid.css';
import ScreenShot from './Screenshot';
import FirstDashboard from '../FirstDashboard/FirstDashboard';
import { 
  FaClock, 
  FaChartLine, 
  FaProjectDiagram, 
  FaTasks,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';

const DashboardGrid = () => {
  const gridItems = [
    { 
      id: 1, 
      title: 'Activity', 
      value: '85%', 
      type: 'activity',
      icon: <FaChartLine />,
      trend: '+12%',
      trendUp: true,
      color: '#10B981'
    },
    { 
      id: 2, 
      title: 'Time Tracked', 
      value: '6h 30m', 
      type: 'time',
      icon: <FaClock />,
      trend: '+2.5h',
      trendUp: true,
      color: '#3B82F6'
    },
    { 
      id: 3, 
      title: 'Projects', 
      value: '12', 
      type: 'projects',
      icon: <FaProjectDiagram />,
      trend: '-1',
      trendUp: false,
      color: '#8B5CF6'
    },
    { 
      id: 4, 
      title: 'Tasks', 
      value: '45', 
      type: 'tasks',
      icon: <FaTasks />,
      trend: '+8',
      trendUp: true,
      color: '#F59E0B'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Stats Grid */}
      <div className="stats-overview">
        <h2 className="section-title">Overview</h2>
        <div className="stats-grid">
          {gridItems.map(item => (
            <div key={item.id} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: `${item.color}15` }}>
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              
              <div className="stat-details">
                <span className="stat-title">{item.title}</span>
                <div className="stat-value-container">
                  <span className="stat-value">{item.value}</span>
                  <span className={`stat-trend ${item.trendUp ? 'positive' : 'negative'}`}>
                    {item.trendUp ? <FaArrowUp /> : <FaArrowDown />}
                    {item.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="screenshots-section">
        <div className="section-header">
          <h2 className="section-title">Recent Screenshots</h2>
          <div className="section-actions">
            <select className="time-filter">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
        <ScreenShot />
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <FirstDashboard />
      </div>
    </div>
  );
};

export default DashboardGrid;