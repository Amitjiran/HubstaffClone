import React from 'react';
import { useLocation } from 'react-router-dom';
import './TheOrganization.css'; // Optional: Add CSS for styling

const TheOrganization = () => {
    const location = useLocation();
    const { name, users } = location.state || {}; // Retrieve organization data from state

    return (
        <div>
        <div className="organization-container">
            <h2>Organization Details</h2>
            <p><strong>Organization Name:</strong> {name}</p>
            <h3>Assigned Users:</h3>
            {users && users.length > 0 ? (
                <table className="organization-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.userId}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No users assigned.</p>
            )}

            
        </div>

        <div>
            <button> Create a new project</button>
        </div>

        </div>
    );
};

export default TheOrganization;
