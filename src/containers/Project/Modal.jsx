import React from 'react';
import './Modal.css'; // Create a CSS file for modal styles

const Modal = ({ isOpen, onClose, onCreate, newProject, handleInputChange }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Project</h2>
        <div className="new-project-form">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={newProject.name}
            onChange={handleInputChange}
            className="project-input"
          />
          <input
            type="text"
            name="teams"
            placeholder="Teams"
            value={newProject.teams}
            onChange={handleInputChange}
            className="project-input"
          />
          <input
            type="text"
            name="members"
            placeholder="Members"
            value={newProject.members}
            onChange={handleInputChange}
            className="project-input"
          />
          <input
            type="text"
            name="todos"
            placeholder="To-dos"
            value={newProject.todos}
            onChange={handleInputChange}
            className="project-input"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget"
            value={newProject.budget}
            onChange={handleInputChange}
            className="project-input"
          />
          <input
            type="text"
            name="memberLimits"
            placeholder="Member Limits"
            value={newProject.memberLimits}
            onChange={handleInputChange}
            className="project-input"
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onCreate}>Create</button>
          <button className="modal-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
