import React, { useState } from 'react';

const CreateProject = ({ onCreate }) => {
    const [projectName, setProjectName] = useState('');
    const [assignedUsers, setAssignedUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const handleCreateProject = () => {
        const newProject = {
            name: projectName,
            users: assignedUsers,
        };
        onCreate(newProject);
        setProjectName('');
        setAssignedUsers([]);
    };

    const handleUserRoleChange = () => {
        if (userId && role) {
            setAssignedUsers((prev) => [...prev, { userId, role }]);
            setUserId('');
            setRole('');
        }
    };

    return (
        <div>
            <h2>Create New Project</h2>
            <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <div>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Employee">Employee</option>
                </select>
                <button onClick={handleUserRoleChange}>Add User</button>
            </div>
            <button onClick={handleCreateProject}>Create Project</button>
            <div>
                <h3>Assigned Users:</h3>
                <ul>
                    {assignedUsers.map((user, index) => (
                        <li key={index}>{user.userId} - {user.role}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CreateProject;