import React, { useState } from 'react';
import CreateOrganization from './CreateOrganization';
import ProjectList from './ProjectList';
import ProjectFinancials from './ProjectFinancials';
import UserManagement from './UserManagement';

const OrganizationManager = () => {
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCreateOrganization = (organization) => {
        console.log('Organization Created:', organization);
        // Logic to handle organization creation
    };

    const handlePromote = (userId) => {
        console.log(`User ${userId} promoted`);
        // Logic to promote user
    };

    const handleDepromote = (userId) => {
        console.log(`User ${userId} depromoted`);
        // Logic to depromote user
    };

    const handleCloseProject = (projectId) => {
        console.log(`Project ${projectId} closed`);
        // Logic to close project
    };

    const handleBlockAccess = (userId) => {
        console.log(`User ${userId} blocked`);
        // Logic to block user access
    };

    return (
        <div>
            <h1>Organization Manager Dashboard</h1>
            <CreateOrganization onCreate={handleCreateOrganization} />
            <ProjectList projects={projects} />
            {selectedProject && <ProjectFinancials project={selectedProject} />}
            <UserManagement 
                users={users} 
                projects={projects} 
                onPromote={handlePromote} 
                onDepromote={handleDepromote} 
                onCloseProject={handleCloseProject} 
                onBlockAccess={handleBlockAccess} 
            />
        </div>
    );
};

export default OrganizationManager;
