import React, { useState } from 'react';

const CreateOrganization = ({ onCreate }) => {
    const [organizationName, setOrganizationName] = useState('');
    const [users, setUsers] = useState([]); // List of users to assign roles
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const handleCreateOrganization = () => {
        // Logic to create a new organization
        const newOrganization = {
            name: organizationName,
            users: users,
        };
        onCreate(newOrganization);
        setOrganizationName('');
        setUsers([]);
    };

    const handleUserRoleChange = () => {
        if (userId && role) {
            setUsers((prev) => [...prev, { userId, role }]);
            setUserId('');
            setRole('');
        }
    };

    return (
        <div>
            <h2>Create New Organization</h2>
            <input
                type="text"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
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
                    <option value="Product Manager">Product Manager</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Employee">Employee</option>
                </select>
                <button onClick={handleUserRoleChange}>Add User</button>
            </div>
            <button onClick={handleCreateOrganization}>Create Organization</button>
            <div>
                <h3>Assigned Users:</h3>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user.userId} - {user.role}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CreateOrganization;
