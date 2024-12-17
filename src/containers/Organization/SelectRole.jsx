import React, { useState } from 'react';
import './SelectRole.css'; // Ensure to import the CSS for styling
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SelectRole = () => {
    const [selectedRole, setSelectedRole] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleOrganizationNameChange = (event) => {
        setOrganizationName(event.target.value);
    };

    const handleCreateOrganization = () => {
        // Logic to create the organization can be added here
        console.log(`Organization "${organizationName}" created!`);
        // Reset the organization name after creation
        setOrganizationName('');
        // Navigate to the dashboard
        navigate("/dashboard");
    };

    const roles = ['Organization Manager', 'Product Manager', 'Team Leader', 'Employee'];

    return (
        <div className="select-role-container">
            <h2>Select Your Role</h2>
            <div className="role-options">
                {roles.map((role) => (
                    <div
                        key={role}
                        className={`role-option ${selectedRole === role ? 'selected' : ''}`}
                        onClick={() => handleRoleSelect(role)}
                    >
                        {role}
                    </div>
                ))}
            </div>
            <div className="selected-role">
                {selectedRole && <p>You have selected: {selectedRole}</p>}
            </div>

            {selectedRole === 'Organization Manager' && (
                <div className="create-organization">
                    <h3>Create Organization</h3>
                    <input
                        type="text"
                        placeholder="Enter organization name"
                        value={organizationName}
                        onChange={handleOrganizationNameChange}
                        className="organization-input"
                    />
                    <button onClick={handleCreateOrganization} className="create-button">
                        Create Organization
                    </button>
                </div>
            )}
        </div>
    );
};

export default SelectRole;