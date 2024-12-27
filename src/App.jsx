// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dashboard from './containers/Dashboard/MainDashboard/AMainDashboard'
// import AMainLogin from './containers/LoginPage/Login/AMainLogin'
// import UserRegister from './containers/Authentication/UserRegister'
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import FirstDashboard from './containers/Dashboard/FirstDashboard/FirstDashboard'
// import TodoDashb from './containers/Dashboard/FirstDashboard/TodoDashb'
// import Calendar from './containers/Dashboard/Calendar/Calendar'
// import Aactivity from './containers/Dashboard/Aactivity/Aactivity'
// import SelectRole from './containers/Organization/SelectRole'
// import ProfileView from './containers/Profile/ProfileView'
// import CreateOrganization from './containers/OrgRole/OrgManager/CreateOrganization'
// import ProjectFinancials from './containers/OrgRole/OrgManager/ProjectFinancials'
// import ProjectList from './containers/OrgRole/OrgManager/ProjectList'
// import OrganizationManager from './containers/OrgRole/OrgManager/OrganizationManager'
// import UserManagement from './containers/OrgRole/OrgManager/UserManagement'
// import TheOrganization from './containers/OrgRole/OrgManager/TheOrganization'
// import Sidebar from './containers/Dashboard/MainDashboard/Sidebar'
// import './containers/Dashboard/MainDashboard/AMainDashboard.css'
// function App() {
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<AMainLogin/>}/>
//       <Route path="/userregister" element={<UserRegister/>}/>
//       <Route path="/createorganization" element={<CreateOrganization/>}/>
//       <Route path="/theorganization" element={<TheOrganization/>}/>
//       <Route path="/dashboard" element={<Dashboard/>}/>
//       <Route path="/calendar" element={<Calendar/>}/>

//       <Route
//         element={
//           <div className="amain-dashboard-layout">
//           <Sidebar 
//             isCollapsed={isSidebarCollapsed} 
//             onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
//           />
//           <div className={`amain-dashboard-content ${isSidebarCollapsed ? 'shifted' : ''}`}>
//         <Route path="/selectrole" element={<SelectRole/>}/>
//         <Route path="/firstdash" element={<FirstDashboard/>}/>
//         <Route path="/tododash" element={<TodoDashb/>}/>
//         <Route path="/aactivity" element={<Aactivity/>}/>
//         <Route path="/profile" element={<ProfileView/>}/>
//         <Route path="/projectfinancials" element={<ProjectFinancials/>}/>
//         <Route path="/projectlist" element={<ProjectList/>}/>
//         <Route path="/usermanagement" element={<UserManagement/>}/>
//         <Route path="/orgmanager" element={<OrganizationManager/>}/>
            
//           </div>
//         </div>
//         }
//         >  
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App;






import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AMainLogin from './containers/LoginPage/Login/AMainLogin';
import UserRegister from './containers/Authentication/UserRegister';
import CreateOrganization from './containers/OrgRole/OrgManager/CreateOrganization';
import TheOrganization from './containers/OrgRole/OrgManager/TheOrganization';
import Dashboard from './containers/Dashboard/MainDashboard/AMainDashboard';
import Calendar from './containers/Dashboard/Calendar/Calendar';
import FirstDashboard from './containers/Dashboard/FirstDashboard/FirstDashboard';
import TodoDashb from './containers/Dashboard/FirstDashboard/TodoDashb';
import Aactivity from './containers/Dashboard/Aactivity/Aactivity';
import SelectRole from './containers/Organization/SelectRole';
import ProfileView from './containers/Profile/ProfileView';
import ProjectFinancials from './containers/OrgRole/OrgManager/ProjectFinancials';
import ProjectList from './containers/OrgRole/OrgManager/ProjectList';
import UserManagement from './containers/OrgRole/OrgManager/UserManagement';
import OrganizationManager from './containers/OrgRole/OrgManager/OrganizationManager';
import Sidebar from './containers/Dashboard/MainDashboard/Sidebar';
import './containers/Dashboard/MainDashboard/AMainDashboard.css';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Layout for routes that require the Sidebar
  const DashboardLayout = () => {
    return (
      <div className="amain-dashboard-layout">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        <div
          className={`amain-dashboard-content ${
            isSidebarCollapsed ? 'shifted' : ''
          }`}
        >
          {/* Nested routes will render here */}
          <Outlet />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without the sidebar */}
        <Route path="/" element={<AMainLogin />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/createorganization" element={<CreateOrganization />} />
        <Route path="/theorganization" element={<TheOrganization />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />

        {/* Routes with the sidebar */}
        <Route element={<DashboardLayout />}>
          <Route path="/selectrole" element={<SelectRole />} />
          <Route path="/firstdash" element={<FirstDashboard />} />
          <Route path="/tododash" element={<TodoDashb />} />
          <Route path="/aactivity" element={<Aactivity />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/projectfinancials" element={<ProjectFinancials />} />
          <Route path="/projectlist" element={<ProjectList />} />
          <Route path="/usermanagement" element={<UserManagement />} />
          <Route path="/orgmanager" element={<OrganizationManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
