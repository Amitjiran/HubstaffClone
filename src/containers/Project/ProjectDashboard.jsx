'use client';

import React, { useState, useRef, useEffect } from 'react';
import './ProjectDashboard.css';
import Modal from './Modal';
import { Search, Clock, Bell, Gift, MoreVertical, Settings } from 'lucide-react';

function ProjectDashboard() {
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Developers',
      teams: 'B',
      members: '',
      todos: 'No to-dos',
      budget: '',
      memberLimits: 'None',
    },
  ]);

  const [newProject, setNewProject] = useState({
    name: '',
    teams: '',
    members: '',
    todos: '',
    budget: '',
    memberLimits: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateProject = () => {
    if (newProject.name) {
      setProjects((prev) => [
        ...prev,
        { id: Date.now().toString(), ...newProject },
      ]);
      resetForm();
    }
  };

  const handleEditProject = (project) => {
    setNewProject(project);
    setCurrentProjectId(project.id);
    setEditMode(true);
    setIsModalOpen(true);
    setDropdownOpen(false);
  };

  const handleUpdateProject = () => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === currentProjectId ? { ...newProject, id: currentProjectId } : project
      )
    );
    resetForm();
  };

  const handleDeleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
    setDropdownOpen(false);
  };

  const resetForm = () => {
    setNewProject({
      name: '',
      teams: '',
      members: '',
      todos: '',
      budget: '',
      memberLimits: '',
    });
    setIsModalOpen(false);
    setEditMode(false);
    setCurrentProjectId(null);
  };

  const toggleDropdown = (project) => {
    setSelectedProject(project);
    setDropdownOpen((prev) => (prev && selectedProject === project ? false : true));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="header-button">
              <Clock className="header-button-icon" />
            </button>
            <span>0:00:00</span>
          </div>
          <div className="header-right">
            <button className="header-button">
              <Search className="header-button-icon" />
            </button>
            <button className="header-button">
              <Bell className="header-button-icon" />
            </button>
            <button className="header-button">
              <Gift className="header-button-icon" />
            </button>
            <button className="header-button">
              <Settings className="header-button-icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <h1 className="title">Projects</h1>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab-button">ACTIVE ({projects.length})</button>
          <button className="tab-button">ARCHIVED (0)</button>
        </div>

        {/* Search, Import, and Create Project */}
        <div className="search-import-container">
          <div className="search-container">
            <Search className="search-icon" />
            <input type="text" placeholder="Search projects" className="search-input" />
          </div>
          <button className="import-button">Import projects</button>
          <button className="create-project-button" onClick={() => setIsModalOpen(true)}>Create Project(accessible for org,product manager)</button>
        </div>

        {/* Projects Table */}
        <table className="table">
          <thead className="table-head">
            <tr>
              {['Name', 'Teams', 'Members', 'To-dos', 'Budget', 'Member limits', ''].map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr className="table-row" key={project.id}>
                <td className="name-cell">
                  <div className="name-icon">
                    <span className="name-icon-text">{project.name.charAt(0)}</span>
                  </div>
                  <span>{project.name}</span>
                </td>
                <td className="name-cell">
                  <div className="teams-icon">
                    <span>{project.teams.charAt(0)}</span>
                  </div>
                  <span className="teams-text">+{project.teams}</span>
                </td>
                <td>{project.members}</td>
                <td>{project.todos}</td>
                <td>{project.budget}</td>
                <td>{project.memberLimits}</td>
                <td>
                  <div className="more-options" ref={dropdownRef}>
                    <button className="more-button" onClick={() => toggleDropdown(project)}>
                      <MoreVertical className="more-icon" />
                    </button>
                    {dropdownOpen && selectedProject === project && (
                      <div className="dropdown-content">
                        <button onClick={() => handleEditProject(project)}>Edit</button>
                        <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-text">Showing {projects.length} project(s)</div>
      </main>

      {/* Modal for Creating or Editing Project */}
      <Modal
        isOpen={isModalOpen}
        onClose={resetForm}
        onCreate={editMode ? handleUpdateProject : handleCreateProject}
        newProject={newProject}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default ProjectDashboard;
