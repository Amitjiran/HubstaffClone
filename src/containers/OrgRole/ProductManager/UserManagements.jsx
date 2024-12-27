import React from 'react';

const UserManagements = ({ users, onPromote }) => {
    return (
        <div>
            <h2>User Management</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => onPromote(user.id)}>Promote to Team Leader</button>
                </div>
            ))}
        </div>
    );
};

export default UserManagements;