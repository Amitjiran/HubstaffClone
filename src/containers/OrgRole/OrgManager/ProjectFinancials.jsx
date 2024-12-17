import React from 'react';

const ProjectFinancials = ({ project }) => {
    return (
        <div>
            <h2>Financial Overview for {project.name}</h2>
            <p>Costs: ${project.costs}</p>
            <p>Revenue: ${project.revenue}</p>
            <p>Profit/Loss: ${project.revenue - project.costs}</p>
        </div>
    );
};

export default ProjectFinancials;
