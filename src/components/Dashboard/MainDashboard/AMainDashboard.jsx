import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import DashboardGrid from './DashboardGrid';
import './AMainDashboard.css';

const AMainDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="amain-dashboard-layout">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <div className={`amain-dashboard-content ${isSidebarCollapsed ? 'shifted' : ''}`}>
      <DashboardHeader />
      <DashboardGrid />
      </div>
    </div>
  );
};

export default AMainDashboard;