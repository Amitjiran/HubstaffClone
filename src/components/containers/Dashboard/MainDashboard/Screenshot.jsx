import React from 'react';
import './Screenshot.css';

const Screenshot = () => {
  const screenshots = [
    { id: 1, time: '10:30 AM', activity: '75%', image: '/screenshot1.png' },
    { id: 2, time: '11:00 AM', activity: '82%', image: '/screenshot2.png' },
    { id: 3, time: '11:30 AM', activity: '68%', image: '/screenshot3.png' }
  ];

  return (
    <div className="screenshots-grid">
      {screenshots.map(screenshot => (
        <div key={screenshot.id} className="screenshot-item">
          <img src={screenshot.image} alt={`Screenshot at ${screenshot.time}`} />
          <div className="screenshot-info">
            <span className="time">{screenshot.time}</span>
            <span className="activity">Activity: {screenshot.activity}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Screenshot;