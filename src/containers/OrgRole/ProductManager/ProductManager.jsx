import React, { useState } from 'react';
import CreateProject from './CreateProject';
import ProjectDocumentation from './ProjectDocumentation';
import UserManagement from './UserManagements';
import TaskAssignment from './TaskAssignment';
import SprintManagement from './SprintManagement';

const ProductManager = () => {
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);

    const handleCreateProject = (project) => {
        setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
    };

    const handleDocumentChange = (projectId, document) => {
        console.log(`Document for project ${projectId} updated:`, document);
        // Logic to handle document update
    };

    const handlePromote = (userId) => {
        console.log(`User ${userId} promoted to Team Leader`);
        // Logic to promote user
    };

    const handleAssignTask = (task) => {
        console.log('Task assigned:', task);
        // Logic to assign task
    };

    const handleStartSprint = (sprint) => {
        console.log('Sprint started:', sprint);
        // Logic to start a new sprint
    };

    return (
        <div>
            <h1>Product Manager Dashboard</h1>
            <CreateProject onCreate={handleCreateProject} />
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <ProjectDocumentation projectId={project.id} onDocumentChange={handleDocumentChange} />
                </div>
            ))}
            <UserManagement users={users} onPromote={handlePromote} />
            <TaskAssignment users={users} onAssignTask={handleAssignTask} />
            <SprintManagement onStartSprint={handleStartSprint} />
        </div>
    );
};

export default ProductManager;