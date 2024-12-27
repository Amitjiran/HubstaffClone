import React, { useState } from 'react';

const TaskAssignment = ({ users, onAssignTask }) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [assignedUser, setAssignedUser] = useState('');

    const handleAssignTask = () => {
        onAssignTask({ description: taskDescription, userId: assignedUser });
        setTaskDescription('');
        setAssignedUser('');
    };

    return (
        <div>
            <h2>Assign Task</h2>
            <input
                type="text"
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <select value={assignedUser} onChange={(e) => setAssignedUser(e.target.value)}>
                <option value="">Select User</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <button onClick={handleAssignTask}>Assign Task</button>
        </div>
    );
};

export default TaskAssignment;