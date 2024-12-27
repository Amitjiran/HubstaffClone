import React, { useState } from 'react';
import CreateOrganization from './CreateOrganization';
import ProjectList from './ProjectList';
import ProjectFinancials from './ProjectFinancials';
import UserManagement from './UserManagement';
import './CreateOrganization.css'; // Optional: Add your CSS file for styling

const OrganizationManager = () => {
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [organizations, setOrganizations] = useState([]);
    const [currentOrganization, setCurrentOrganization] = useState(null);


    
    // Function to create a new organization
    const handleCreateOrganization = (organization) => {
        setOrganizations((prev) => [...prev, { ...organization, id: Date.now() }]);
        console.log('Organization Created:', organization);
    };

    // Function to promote a user to Team Leader
    const handlePromote = (userId) => {
        setUsers((prev) => 
            prev.map(user => 
                user.id === userId ? { ...user, role: 'Team Leader' } : user
            )
        );
        console.log(`User ${userId} promoted to Team Leader`);
    };

    // Function to depromote a user
    const handleDepromote = (userId) => {
        setUsers((prev) => 
            prev.map(user => 
                user.id === userId ? { ...user, role: 'Employee' } : user
            )
        );
        console.log(`User ${userId} depromoted to Employee`);
    };

    // Function to close a project
    const handleCloseProject = (projectId) => {
        setProjects((prev) => prev.filter(project => project.id !== projectId));
        console.log(`Project ${projectId} closed`);
    };

    // Function to block user access
    const handleBlockAccess = (userId) => {
        setUsers((prev) => 
            prev.map(user => 
                user.id === userId ? { ...user, blocked: true } : user
            )
        );
        console.log(`User ${userId} blocked`);
    };

    // Function to select a project for financial analysis
    const handleSelectProject = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        setSelectedProject(project);
        console.log(`Selected project for financials: ${projectId}`);
    };

    // Function to add a new project
    const handleAddProject = (project) => {
        setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
        console.log('Project Added:', project);
    };

    // Function to update project financials
    const handleUpdateFinancials = (projectId, financialData) => {
        setProjects((prev) => 
            prev.map(project => 
                project.id === projectId ? { ...project, financials: financialData } : project
            )
        );
        console.log(`Financials updated for project ${projectId}:`, financialData);
    };

    return (
        <div className="organization-manager">
            <h1>Organization Manager Dashboard</h1>
            <CreateOrganization onCreate={handleCreateOrganization} />
            <h2>Projects</h2>
            <ProjectList 
                projects={projects} 
                onSelectProject={handleSelectProject} 
                onAddProject={handleAddProject} 
                onCloseProject={handleCloseProject} 
            />
            {selectedProject && (
                <ProjectFinancials 
                    project={selectedProject} 
                    onUpdateFinancials={handleUpdateFinancials} 
                />
            )}
            <h2>User Management</h2>
            <UserManagement 
                users={users} 
                projects={projects} 
                onPromote={handlePromote} 
                onDepromote={handleDepromote} 
                onBlockAccess={handleBlockAccess} 
            />
        </div>
    );
};

export default OrganizationManager;
