// src/components/Dashboard/Aactivity/Aactivity.jsx
import React, { useState, useEffect } from 'react';
import './Aactivity.css';

// Mock data for demonstration
const mockActivities = [
    { id: 1, project: 'Project A', task: 'Task 1', time: '1:00:00' },
    { id: 2, project: 'Project B', task: 'Task 2', time: '2:00:00' },
    { id: 3, project: 'Project C', task: 'Task 3', time: '0:30:00' },
    { id: 4, project: 'Project D', task: 'Task 4', time: '1:15:00' },
    { id: 5, project: 'Project E', task: 'Task 5', time: '0:45:00' },
    // Add more mock data as needed
];

const Aactivity = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [activities, setActivities] = useState(mockActivities);
    const [totalTime, setTotalTime] = useState('0:00:00');
    const [filter, setFilter] = useState('');
    const [screenshots, setScreenshots] = useState([]);
    const [everyTenMinutes, setEveryTenMinutes] = useState([]);
    const [activeTab, setActiveTab] = useState('activities');

    useEffect(() => {
        const interval = setInterval(() => {
            captureScreenshot();
        }, 10 * 60 * 1000); // 10 minutes in milliseconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const captureScreenshot = () => {
        const newScreenshot = {
            id: screenshots.length + 1,
            timestamp: new Date().toLocaleString(),
            activity: `Screenshot taken at ${new Date().toLocaleTimeString()}`,
        };
        setScreenshots(prevScreenshots => [...prevScreenshots, newScreenshot]);
        setEveryTenMinutes(prevScreenshots => [...prevScreenshots, newScreenshot]);
    };

    const handleSelectAll = () => {
        setSelectedItems(activities.map(activity => activity.id));
    };

    const handleDeleteSelected = () => {
        const newActivities = activities.filter(activity => !selectedItems.includes(activity.id));
        setActivities(newActivities);
        setSelectedItems([]);
    };

    const handleSelectItem = (id) => {
        setSelectedItems(prevSelected => 
            prevSelected.includes(id) ? prevSelected.filter(item => item !== id) : [...prevSelected, id]
        );
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredActivities = activities.filter(activity => 
        activity.project.toLowerCase().includes(filter.toLowerCase()) || 
        activity.task.toLowerCase().includes(filter.toLowerCase())
    );

    const calculateTotalTime = () => {
        const totalSeconds = selectedItems.reduce((total, id) => {
            const activity = activities.find(activity => activity.id === id);
            if (activity) {
                const [hours, minutes, seconds] = activity.time.split(':').map(Number);
                return total + (hours * 3600 + minutes * 60 + seconds);
            }
            return total;
        }, 0);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        setTotalTime(`${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    };

    return (
        <div className="activity-container">
            <header className="activity-header">
                <h1>Hubstaff - Screenshot activity</h1>
                <div className="tabs">
                    <button onClick={() => setActiveTab('activities')} className={activeTab === 'activities' ? 'active' : ''}>
                        Activities
                    </button>
                    <button onClick={() => setActiveTab('screenshots')} className={activeTab === 'screenshots' ? 'active' : ''}>
                        All Screenshots
                    </button>
                    <button onClick={() => setActiveTab('everyTenMinutes')} className={activeTab === 'everyTenMinutes' ? 'active' : ''}>
                        Every 10 Minutes
                    </button>
                </div>
            </header>
            <div className="activity-content">
                {activeTab === 'activities' ? (
                    <>
                        <input 
                            type="text" 
                            placeholder="Filter by project or task" 
                            value={filter} 
                            onChange={handleFilterChange} 
                        />
                        <div className="batch-actions-wrapper">
                            <div className="selected-items">{selectedItems.length} screens selected</div>
                            <button onClick={handleDeleteSelected} disabled={selectedItems.length === 0}>
                                Delete Selected
                            </button>
                            <button onClick={calculateTotalTime} disabled={selectedItems.length === 0}>
                                Calculate Total Time
                            </button>
                            <div>Total Time: {totalTime}</div>
                        </div>
                        <div className="activity-list">
                            {filteredActivities.map(activity => (
                                <div key={activity.id} className="activity-item">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedItems.includes(activity.id)} 
                                        onChange={() => handleSelectItem(activity.id)} 
                                    />
                                    <span>{activity.project} - {activity.task} - {activity.time}</span>
                                </div>
                            ))}
                        </div>
                        <div className="footer">
                            <button onClick={handleSelectAll}>Select All</button>
                            <button onClick={() => setSelectedItems([])}>Deselect All</button>
                        </div>
                    </>
                ) : activeTab === 'screenshots' ? (
                    <div className="screenshot-list">
                        <h2>All Screenshots</h2>
                        {screenshots.length === 0 ? (
                            <p>No screenshots taken yet.</p>
                        ) : (
                            screenshots.map(screenshot => (
                                <div key={screenshot.id} className="screenshot-item">
                                    <span>{screenshot.activity} - {screenshot.timestamp}</span>
                                </div>
                            ))
                        )}
                    </div>
                ) : (
                    <div className="screenshot-list">
                        <h2>Screenshots Taken Every 10 Minutes</h2>
                        {everyTenMinutes.length === 0 ? (
                            <p>No screenshots taken every 10 minutes yet.</p>
                        ) : (
                            everyTenMinutes.map(screenshot => (
                                <div key={screenshot.id} className="screenshot-item">
                                    <span>{screenshot.activity} - {screenshot.timestamp}</span>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Aactivity;