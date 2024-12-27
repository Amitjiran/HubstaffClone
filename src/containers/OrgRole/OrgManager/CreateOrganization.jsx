import React, { useState } from 'react';
import './CreateOrganization.css';
import { useLocation,useNavigate } from 'react-router-dom'; // Import useLocation

    const CreateOrganization = ({ onCreate }) => {
    // const [organizationName, setOrganizationName] = useState('');
    const location = useLocation(); // Use useLocation to access location
    const navigate = useNavigate(); // Initialize useNavigate
    const { organizationName,selectedRole } = location.state || {}; // Retrieve organization name from state

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('');
    const [role, setRole] = useState('');

    const handleCreateOrganization = () => {
        const newOrganization = {
            name: organizationName,
            role: selectedRole,
            users: users,
        };
        // onCreate(newOrganization);
        // setOrganizationName('');
        // setUsers([]);
navigate('/theorganization', { state: { name: organizationName, users: users,role: selectedRole } });
    };

    const handleUserRoleChange = () => {
        if (userId && role) {
            setUsers((prev) => [...prev, { userId, role }]);
            setUserId('');
            setRole('');
        }
    };

    return (
        <div className="create-organization-container">
            <h2>Create New Organization</h2>
            <input
                type="text"
                placeholder="Organization Name"
                value={organizationName}
                // onChange={(e) => setOrganizationName(e.target.value)}
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
                        <li key={index}>
                            <span>{user.userId}</span> - <span>{user.role}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CreateOrganization;