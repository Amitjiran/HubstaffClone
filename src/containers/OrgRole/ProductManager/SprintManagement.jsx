import React, { useState } from 'react';

const SprintManagement = ({ onStartSprint }) => {
    const [sprintName, setSprintName] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleStartSprint = () => {
        onStartSprint({ name: sprintName, deadline });
        setSprintName('');
        setDeadline('');
    };

    return (
        <div>
            <h2>Start New Sprint</h2>
            <input
                type="text"
                placeholder="Sprint Name"
                value={sprintName}
                onChange={(e) => setSprintName(e.target.value)}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button onClick={handleStartSprint}>Start Sprint</button>
        </div>
    );
};

export default SprintManagement;