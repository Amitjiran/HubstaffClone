import React from 'react';

const TaskStatusManagement = ({ tasks, onChangeStatus }) => {
    const handleStatusChange = (taskId, newStatus) => {
        onChangeStatus(taskId, newStatus);
    };

    return (
        <div>
            <h2>Manage Task Status</h2>
            {tasks.map((task) => (
                <div key={task.id}>
                    <span>{task.description} - {task.status}</span>
                    <select
                        value={task.status}
                        onChange={(e) => handleStatusChange(task.id, e.target.value)}
                    >
                        <option value="To Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            ))}
        </div>
    );
};

export default TaskStatusManagement;