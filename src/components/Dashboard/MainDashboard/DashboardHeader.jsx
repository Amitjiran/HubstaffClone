// // src/components/Dashboard/DashboardHeader.jsx
// import React, { useState } from 'react';
// import './DashboardHeader.css';

// // Import icons from react-icons
// import { HiOutlineViewGrid } from 'react-icons/hi';
// import { IoStatsChartOutline } from 'react-icons/io5';
// import { BiCalendarWeek } from 'react-icons/bi';
// import { MdOutlineWork } from 'react-icons/md';
// import { GiReceiveMoney } from 'react-icons/gi';

// const DashboardHeader = () => {
//   const [activeTab, setActiveTab] = useState('weekly');

//   return (
//     <header className="dashboard-header">
//       <div className="header-left">
        
        
//         <nav className="navigation">
//           <a 
//             href="#weekly" 
//             className={`nav-link ${activeTab === 'weekly' ? 'active' : ''}`}
//             onClick={() => setActiveTab('weekly')}
//            >
//             <BiCalendarWeek className="nav-icon" />
//             <span>Weekly Activity</span>
//           </a>
//           <a 
//             href="#worked" 
//             className={`nav-link ${activeTab === 'worked' ? 'active' : ''}`}
//             onClick={() => setActiveTab('worked')}
//           >
//             <MdOutlineWork className="nav-icon" />
//             <span>Worked This Week</span>
//           </a>
//           <a 
//             href="#earned" 
//             className={`nav-link ${activeTab === 'earned' ? 'active' : ''}`}
//             onClick={() => setActiveTab('earned')}
//           >
//             <GiReceiveMoney className="nav-icon" />
//             <span>Earned This Week</span>
//           </a>
//           <a 
//             href="#insights" 
//             className={`nav-link ${activeTab === 'insights' ? 'active' : ''}`}
//             onClick={() => setActiveTab('insights')}
//           >
//             <IoStatsChartOutline className="nav-icon" />
//             <span>Insights</span>
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;

import React from 'react';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>Dashboard</h1>
        <div className="date-picker">
          <input type="date" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
      </div>
      
      <div className="header-right">
        <div className="user-profile">
          <img src="/default-avatar.png" alt="User avatar" />
          <span className="user-name">John Doe</span>
        </div>
        <button className="export-btn">
          Export Data
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;