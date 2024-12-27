import React from 'react';

const UserManagement = ({ users, onPromote, onDepromote, onBlockAccess }) => {
    return (
        <div>
            <h2>User Management</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <span>{user.name} - {user.role}</span>
                    <button onClick={() => onPromote(user.id)}>Promote</button>
                    <button onClick={() => onDepromote(user.id)}>Depromote</button>
                    <button onClick={() => onBlockAccess(user.id)}>Block Access</button>
                </div>
            ))}
        </div>
    );
};

export default UserManagement;
