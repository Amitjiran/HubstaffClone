import React from 'react';

const UserManagement = ({ users, projects, onPromote, onDepromote, onCloseProject, onBlockAccess }) => {
    return (
        <div>
            <h2>User Management</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => onPromote(user.id)}>Promote</button>
                    <button onClick={() => onDepromote(user.id)}>Depromote</button>
                    <button onClick={() => onBlockAccess(user.id)}>Block Access</button>
                </div>
            ))}
            <h2>Manage Projects</h2>
            {projects.map((project) => (
                <div key={project.id}>
                    <span>{project.name}</span>
                    <button onClick={() => onCloseProject(project.id)}>Close Project</button>
                </div>
            ))}
        </div>
    );
};

export default UserManagement;
