import React, { useState } from 'react';

const ProjectFinancials = ({ project, onUpdateFinancials }) => {
    const [costs, setCosts] = useState(project.financials?.costs || 0);
    const [revenue, setRevenue] = useState(project.financials?.revenue || 0);

    const handleUpdate = () => {
        const financialData = { costs, revenue };
        onUpdateFinancials(project.id, financialData);
    };
    return (
        <div>
            <h2>Financial Overview for {project.name}</h2>
            <input
                type="number"
                placeholder="Costs"
                value={costs}
                onChange={(e) => setCosts(e.target.value)}
            />
            <input
                type="number"
                placeholder="Revenue"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
            />
            <button onClick={handleUpdate}>Update Financials</button>
            <p>Profit/Loss: ${revenue - costs}</p>
        </div>
    );
};

export default ProjectFinancials;
