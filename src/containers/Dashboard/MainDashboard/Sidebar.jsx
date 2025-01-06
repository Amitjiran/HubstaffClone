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
  const [openDropdown, setOpenDropdown] = useState(null); // State to manage which dropdown is open

  const menuItems = [
    { path: '/dashboard', name: 'Dashboard', icon: <FaHome /> },
    { path: '/tasks', name: 'Tasks', icon: <FaTasks /> },
    { path: '/calendar', name: 'Calendar', icon: <FaCalendarAlt /> },
    { path: '/analytics', name: 'Analytics', icon: <FaChartLine /> },
    { path: '/activity', name: 'Activity', icon: <FaChartLine /> },
    { path: '/selectrole', name: 'Organization', icon: <FaChartLine /> },
    { 
      path: '/projectmanagement', 
      name: 'Project management', 
      icon: <FaChartLine />,
      subItems: [ // SubItems for "Project management"
        { path: '/projectmanagement', name: 'Projects', icon: <FaChartLine /> },
        { 
          path: '/tasks', 
          name: 'Tasks', 
          icon: <FaChartLine />,
          subItems: [ // Nested subItems for "Tasks" under "Project management"
            { path: '/task/subtask1', name: 'Subtask 1' },
            { path: '/task/subtask2', name: 'Subtask 2' }, 
          ]
        },
      ]
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleDropdown = (itemPath) => {
    setOpenDropdown(openDropdown === itemPath ? null : itemPath); // Toggle dropdown for specific item
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
          <div key={item.path}>
            <Link
              to={item.path}
              className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={item.subItems ? () => toggleDropdown(item.path) : undefined} // Toggle dropdown on click
            >
              <span className="icon">{item.icon}</span>
              {!isCollapsed && <span className="label">{item.name}</span>}
              {!isCollapsed && isActive(item.path) && <div className="active-indicator" />}
            </Link>
            {item.subItems && openDropdown === item.path && ( // Render dropdown if it has subItems and is open
              <div className="dropdown">
                {item.subItems.map((subItem) => (
                  <div key={subItem.path}>
                    <Link
                      to={subItem.path}
                      className={`menu-item ${isActive(subItem.path) ? 'active' : ''}`}
                    >
                      <span className="icon">{subItem.icon}</span>
                      {!isCollapsed && <span className="label">{subItem.name}</span>}
                    </Link>
                    {subItem.subItems && openDropdown === subItem.path && ( // Check for nested subItems
                      <div className="dropdown">
                        {subItem.subItems.map((nestedSubItem) => (
                          <Link
                            key={nestedSubItem.path}
                            to={nestedSubItem.path}
                            className={`menu-item ${isActive(nestedSubItem.path) ? 'active' : ''}`}
                          >
                            <span className="icon">{nestedSubItem.icon}</span>
                            {!isCollapsed && <span className="label">{nestedSubItem.name}</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
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






// // src/components/Dashboard/Sidebar.jsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { 
//   FaHome, 
//   FaTasks, 
//   FaCalendarAlt, 
//   FaChartLine, 
//   FaCog, 
//   FaUser, 
//   FaBars, 
//   FaSignOutAlt,
//   FaBell,
//   FaSearch
// } from 'react-icons/fa';
// import './Sidebar.css';

// const Sidebar = ({ isCollapsed, onToggle }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const location = useLocation();
//   const [isTaskDropdownOpen,setTaskDropdownOpen]=useState(false);

//   const menuItems = [
//     { path: '/dashboard', name: 'Dashboard', icon: <FaHome /> },
//     { path: '/tasks', name: 'Tasks', icon: <FaTasks /> },
//     { path: '/calendar', name: 'Calendar', icon: <FaCalendarAlt /> },
//     { path: '/analytics', name: 'Analytics', icon: <FaChartLine /> },
//     { path: '/activity', name: 'Activity', icon: <FaChartLine /> },
//     { path: '/createorganization', name: 'Organization', icon: <FaChartLine /> },
//     { path: '/projectmanagement'
//       , name: 'Project management', 
//       icon: <FaChartLine />,
//     subItems:[
//       { path: '/projectmanagement', name: 'Projects', icon: <FaChartLine /> },
//       { path: '/tasks', name: 'Tasks', icon: <FaChartLine /> },
//     ] },
    
//   ];

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   const toggleTaskDropdown=()=>{
//     setTaskDropdownOpen(!isTaskDropdownOpen);
//   }

//   return (
//     <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//       <div className="sidebar-header">
//         <div className="logo-container">
//           {!isCollapsed && <h2>TimeTracker</h2>}
//           <button 
//             className="collapse-btn"
//             onClick={onToggle}
//           >
//             <FaBars />
//           </button>
//         </div>
//       </div>

//       {!isCollapsed && (
//         <div className="search-container">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       )}

//       <div className="sidebar-menu">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
//             onClick={item.subItems ? toggleTaskDropdown:undefined } //toggle dropdown onclick
//           >
//             <span className="icon">{item.icon}</span>
//             {!isCollapsed && <span className="label">{item.name}</span>}
//             {!isCollapsed && isActive(item.path) && <div className="active-indicator" />}
//           </Link>

// {item.subItems && isTaskDropdownOpen &&( // render for dropdown
//     <div class="dropdown">
//  {item.subItems.map((subItem)=>(
//   <Link 
//   key={subItem.path}
//   to={subItem.path}
//   className={`menu-item ${isActive(subItem.path) ? 'active' :''}`}
//   >
// <span className="icon" >{subItem.icon}</span>
// {!isCollapsed && <span className="label">{subItem.name}</span>}
//   </Link>
// ))}
//     </div>
//   )
// }
// ))}
//       </div>

//       <div className="sidebar-footer">
//         <div className="notifications">
//           <FaBell className="icon" />
//           {!isCollapsed && <span className="notification-badge">3</span>}
//         </div>

//         <div className="user-profile">
//           <img 
//             src="https://via.placeholder.com/40" 
//             alt="User Avatar"
//             className="avatar"
//           />
//           {!isCollapsed && (
//             <div className="user-info">
//               <span className="user-name">John Doe</span>
//               <span className="user-role">Admin</span>
//             </div>
//           )}
//         </div>

//         <div className="footer-actions">
//           <Link to="/settings" className="menu-item">
//             <FaCog className="icon" />
//             {!isCollapsed && <span className="label">Settings</span>}
//           </Link>
//           <button className="menu-item logout-btn">
//             <FaSignOutAlt className="icon" />
//             {!isCollapsed && <span className="label">Logout</span>}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;