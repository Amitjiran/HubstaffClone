import React, { useState } from 'react';
import InviteMembers from './InviteMembers';
import TaskAssignment from './TaskAssignment';
import TaskStatusManagement from './TaskStatusManagement';
import StandupScheduler from './StandupScheduler';
import SprintReport from './SprintReport';

const TeamLeaderDashboard = () => {
    const [users, setUsers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [reports, setReports] = useState([]);

    const handleInvite = (member) => {
        setUsers((prev) => [...prev, member]);
        console.log('Member Invited:', member);
    };

    const handleAssignTask = (task) => {
        setTasks((prev) => [...prev, { ...task, id: Date.now(), status: 'To Do' }]);
        console.log('Task Assigned:', task);
    };

    const handleChangeStatus = (taskId, newStatus) => {
        setTasks((prev) => 
            prev.map(task => 
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
        console.log(`Task ${taskId} status changed to ${newStatus}`);
    };

    const handleSchedule = (standup) => {
        console.log('Stand-Up Scheduled:', standup);
    };

    const handleCreateReport = (reportContent) => {
        setReports((prev) => [...prev, { content: reportContent, id: Date.now() }]);
        console.log('Sprint Report Created:', reportContent);
    };

    return (
        <div>
            <h1>Team Leader Dashboard</h1>
            <InviteMembers onInvite={handleInvite} />
            <TaskAssignment users={users} onAssignTask={handleAssignTask} />
            <TaskStatusManagement tasks={tasks} onChangeStatus={handleChangeStatus} />
            <StandupScheduler onSchedule={handleSchedule} />
            <SprintReport onCreateReport={handleCreateReport} />
        </div>
    );
};

export default TeamLeaderDashboard;