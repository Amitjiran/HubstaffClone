import React from 'react';

const ProjectList = ({ projects }) => {
    return (
        <div>
            <h2>Projects in Organization</h2>
            {projects.length === 0 ? (
                <p>No projects available.</p>
            ) : (
                projects.map((project) => (
                    <div key={project.id}>
                        <h3>{project.name}</h3>
                        <p>Status: {project.status}</p>
                        <p>Progress: {project.progress}%</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProjectList;
