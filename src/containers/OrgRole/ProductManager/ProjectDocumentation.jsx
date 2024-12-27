import React, { useState } from 'react';

const ProjectDocumentation = ({ projectId, onDocumentChange }) => {
    const [document, setDocument] = useState(null);

    const handleDocumentChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDocument(file);
            onDocumentChange(projectId, file); // Call the parent function to handle the document
        }
    };

    return (
        <div>
            <h2>Project Documentation</h2>
            <input type="file" onChange={handleDocumentChange} />
            {document && <p>Document: {document.name}</p>}
        </div>
    );
};

export default ProjectDocumentation;