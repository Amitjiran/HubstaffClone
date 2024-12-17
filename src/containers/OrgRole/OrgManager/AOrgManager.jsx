import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import UserManagement from './UserManagement';
import ProjectList from './ProjectList';
import ProjectFinancials from './ProjectFinancials';
import CreateOrganization from './CreateOrganization';
import OrganizationManager from './OrganizationManager';

const AOrgManager=()=>(
<>
<BrowserRouter>
      <Routes>
        <Route path="/createorganization" element={<CreateOrganization/>}/>
        <Route path="/projectfinancials" element={<ProjectFinancials/>}/>
        <Route path="/projectlist" element={<ProjectList/>}/>
        <Route path="/usermanagement" element={<UserManagement/>}/>
        <Route path="/orgmanager" element={<OrganizationManager/>}/>

      </Routes>
      </BrowserRouter>



</>
)

export default AOrgManager;