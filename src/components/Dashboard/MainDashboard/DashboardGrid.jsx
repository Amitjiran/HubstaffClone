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

const DashboardGrid = () => {
  const gridItems = [
    { id: 1, title: 'Activity', value: '85%', type: 'activity' },
    { id: 2, title: 'Time Tracked', value: '6h 30m', type: 'time' },
    { id: 3, title: 'Projects', value: '12', type: 'projects' },
    { id: 4, title: 'Tasks', value: '45', type: 'tasks' }
  ];

  return (
    <div className="dashboard-grid">
      <div className="grid-container">
        {gridItems.map(item => (
          <div key={item.id} className="grid-item">
            <h3>{item.title}</h3>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="screenshots-container">
        <h2>Recent Screenshots</h2>
        <ScreenShot />
      </div>
    </div>
  );
};

export default DashboardGrid;