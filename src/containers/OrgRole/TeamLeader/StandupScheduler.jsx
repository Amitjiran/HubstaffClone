import React, { useState } from 'react';

const StandupScheduler = ({ onSchedule }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSchedule = () => {
        if (date && time) {
            onSchedule({ date, time });
            setDate('');
            setTime('');
        }
    };

    return (
        <div>
            <h2>Schedule Daily Stand-Up</h2>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={handleSchedule}>Schedule Stand-Up</button>
        </div>
    );
};

export default StandupScheduler;