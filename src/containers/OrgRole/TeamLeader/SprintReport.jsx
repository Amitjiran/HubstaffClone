import React, { useState } from 'react';

const SprintReport = ({ onCreateReport }) => {
    const [reportContent, setReportContent] = useState('');

    const handleCreateReport = () => {
        if (reportContent) {
            onCreateReport(reportContent);
            setReportContent('');
        }
    };

    return (
        <div>
            <h2>Create Sprint Report</h2>
            <textarea
                placeholder="Describe what the team did and didn't do..."
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
            />
            <button onClick={handleCreateReport}>Submit Report</button>
        </div>
    );
};

export default SprintReport;