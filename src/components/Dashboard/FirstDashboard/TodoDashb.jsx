import React, { useState, useEffect } from 'react';
import { 
  FaTrash, FaEdit, FaCheck, FaClock, FaFlag, 
  FaCalendarAlt, FaTags, FaSearch, FaFilter,
  FaSortAmountDown, FaExclamationCircle
} from 'react-icons/fa';
import './TodoDashb.css';

const TodoDashb = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('dueDate');
  const [category, setCategory] = useState('all');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  // Categories
  const categories = ['all', 'work', 'personal', 'shopping', 'health', 'education'];

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      description,
      completed: false,
      dueDate,
      priority,
      category,
      tags: selectedTags,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completedAt: null,
    };

    if (editingId) {
      setTodos(todos.map(todo =>
        todo.id === editingId
          ? { ...todo, ...newTodo, id: editingId }
          : todo
      ));
      setEditingId(null);
    } else {
      setTodos([...todos, newTodo]);
    }

    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setInputValue('');
    setDescription('');
    setDueDate('');
    setPriority('medium');
    setCategory('all');
    setSelectedTags([]);
  };

  const handleTagChange = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Sorting and Filtering Logic
  const getSortedAndFilteredTodos = () => {
    let filtered = todos;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(todo =>
        todo.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (filter !== 'all') {
      filtered = filtered.filter(todo =>
        filter === 'completed' ? todo.completed : !todo.completed
      );
    }

    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(todo => todo.category === category);
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(todo =>
        selectedTags.every(tag => todo.tags.includes(tag))
      );
    }

    // Sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case 'created':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id) => {
    const todo = todos.find(t => t.id === id);
    setEditingId(id);
    setInputValue(todo.text);
    setDueDate(todo.dueDate);
    setPriority(todo.priority);
  };

  const submitEdit = () => {
    setTodos(todos.map(todo =>
      todo.id === editingId
        ? { ...todo, text: inputValue, dueDate, priority }
        : todo
    ));
    setEditingId(null);
    setInputValue('');
    setDueDate('');
    setPriority('medium');
  };

  return (
    <div className="todo-dashboard">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Task Manager</h1>
          <div className="todo-summary">
            <div className="summary-item">
              <span className="summary-label">Total Tasks</span>
              <span className="summary-value">{todos.length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Pending</span>
              <span className="summary-value">{todos.filter(t => !t.completed).length}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Completed</span>
              <span className="summary-value">{todos.filter(t => t.completed).length}</span>
            </div>
          </div>
        </header>

        {/* Search and Filters */}
        <div className="todo-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-controls">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="dueDate">Sort by Due Date</option>
              <option value="priority">Sort by Priority</option>
              <option value="created">Sort by Created Date</option>
            </select>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Task Form */}
        <form onSubmit={handleSubmit} className="todo-form">
          <div className="form-row">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Task title..."
              className="todo-input"
            />
          </div>

          <div className="form-row">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description..."
              className="todo-description"
            />
          </div>

          <div className="form-row form-grid">
            <div className="form-group">
              <label>
                <FaCalendarAlt /> Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="date-input"
              />
            </div>

            <div className="form-group">
              <label>
                <FaFlag /> Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="priority-select"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <FaTags /> Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="add-btn">
            {editingId ? (
              <>
                <FaEdit /> Update Task
              </>
            ) : (
              <>
                <FaCheck /> Add Task
              </>
            )}
          </button>
        </form>

        {/* Task List */}
        <div className="todo-list">
          {getSortedAndFilteredTodos().map(todo => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
            >
              <div className="todo-content">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="todo-text">
                  <span className="task-text">{todo.text}</span>
                  {todo.dueDate && (
                    <span className="due-date">
                      <FaClock /> {new Date(todo.dueDate).toLocaleDateString()}
                    </span>
                  )}
                  <span className={`priority-badge ${todo.priority}`}>
                    <FaFlag /> {todo.priority}
                  </span>
                </div>
              </div>
              <div className="todo-actions">
                <button
                  className="edit-btn"
                  onClick={() => startEditing(todo.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delete Confirmation Modal */}
        {showConfirmDelete && (
          <div className="modal-overlay">
            <div className="modal-content">
              <FaExclamationCircle className="warning-icon" />
              <h3>Delete Task</h3>
              <p>Are you sure you want to delete this task?</p>
              <div className="modal-actions">
                <button
                  className="btn-cancel"
                  onClick={() => setShowConfirmDelete(false)}
                >
                  Cancel
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    deleteTodo(todoToDelete);
                    setShowConfirmDelete(false);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoDashb;