import React, { useState, useEffect, useCallback } from 'react';
import { 
  format, 
  addDays, 
  startOfWeek, 
  isToday, 
  isSameDay, 
  addMonths, 
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addHours,
  parseISO,
  getHours,
  getMinutes 
} from 'date-fns';
import './Calendar.css';

// CalendarHeader Component
const CalendarHeader = ({ 
  currentDate, 
  view, 
  onViewChange, 
  onDateChange, 
  filters, 
  onFilterChange, 
  categories 
}) => {
  return (
    <div className="calendar-header">
      <div className="calendar-navigation">
        <button onClick={() => onDateChange('prev')}>&lt;</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => onDateChange('next')}>&gt;</button>
      </div>
      
      <div className="view-controls">
        <button 
          className={view === 'month' ? 'active' : ''} 
          onClick={() => onViewChange('month')}
        >
          Month
        </button>
        <button 
          className={view === 'week' ? 'active' : ''} 
          onClick={() => onViewChange('week')}
        >
          Week
        </button>
        <button 
          className={view === 'day' ? 'active' : ''} 
          onClick={() => onViewChange('day')}
        >
          Day
        </button>
      </div>

      <div className="filter-controls">
        <select 
          multiple 
          value={filters.categories}
          onChange={(e) => onFilterChange({ 
            categories: Array.from(e.target.selectedOptions, option => Number(option.value))
          })}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={filters.showCompleted}
            onChange={(e) => onFilterChange({ showCompleted: e.target.checked })}
          />
          Show Completed
        </label>
      </div>
    </div>
  );
};

// MonthView Component
const MonthView = ({ 
  currentDate, 
  events, 
  selectedDate, 
  onDateClick, 
  onEventClick, 
  categories 
}) => {
  const generateMonthDays = () => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 });
    const end = endOfMonth(currentDate);
    const days = eachDayOfInterval({ start, end });
    
    // Add extra days to complete the grid
    while (days.length < 42) {
      days.push(addDays(days[days.length - 1], 1));
    }
    
    return days;
  };

  const renderDayEvents = (date) => {
    const dayEvents = events.filter(event => isSameDay(parseISO(event.date), date));
    return dayEvents.slice(0, 3).map(event => {
      const category = categories.find(cat => cat.id === event.category);
      return (
        <div
          key={event.id}
          className="event-pill"
          style={{ backgroundColor: category?.color }}
          onClick={(e) => {
            e.stopPropagation();
            onEventClick(event);
          }}
        >
          {event.title}
        </div>
      );
    });
  };

  return (
    <div className="month-view">
      <div className="weekday-header">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="month-grid">
        {generateMonthDays().map(date => (
          <div
            key={date.toString()}
            className={`day-cell ${
              !isSameDay(date, currentDate) ? 'other-month' : ''
            } ${isToday(date) ? 'today' : ''} ${
              selectedDate && isSameDay(date, selectedDate) ? 'selected' : ''
            }`}
            onClick={() => onDateClick(date)}
          >
            <div className="day-header">
              <span className="day-number">{format(date, 'd')}</span>
              {isToday(date) && <span className="today-marker">Today</span>}
            </div>
            <div className="day-events">
              {renderDayEvents(date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// WeekView Component
const WeekView = ({
  currentDate,
  events,
  selectedDate,
  onDateClick,
  onEventClick,
  onTimeSlotClick,
  timeSlots,
  categories
}) => {
  const generateWeekDays = () => {
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, index) => addDays(startDate, index));
  };

  const weekDays = generateWeekDays();

  const renderTimeSlots = () => (
    <div className="time-slots">
      {timeSlots.map(({ hour, time }) => (
        <div key={hour} className="time-slot">
          <span className="time-label">{time}</span>
        </div>
      ))}
    </div>
  );

  const renderEventInSlot = (date, hour) => {
    const slotEvents = events.filter(event => {
      const eventDate = parseISO(event.date);
      const eventHour = parseInt(event.startTime.split(':')[0]);
      return isSameDay(eventDate, date) && eventHour === hour;
    });

    return slotEvents.map(event => {
      const category = categories.find(cat => cat.id === event.category);
      const duration = parseInt(event.endTime.split(':')[0]) - parseInt(event.startTime.split(':')[0]);
      
      return (
        <div
          key={event.id}
          className="week-event"
          style={{
            backgroundColor: category?.color,
            height: `${duration * 40}px`
          }}
          onClick={(e) => {
            e.stopPropagation();
            onEventClick(event);
          }}
        >
          <div className="event-title">{event.title}</div>
          <div className="event-time">
            {event.startTime} - {event.endTime}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="week-view">
      <div className="week-header">
        <div className="time-column-header"></div>
        {weekDays.map(date => (
          <div
            key={date.toString()}
            className={`day-column-header ${isToday(date) ? 'today' : ''}`}
            onClick={() => onDateClick(date)}
          >
            <div className="day-name">{format(date, 'EEE')}</div>
            <div className="day-number">{format(date, 'd')}</div>
          </div>
        ))}
      </div>
      
      <div className="week-body">
        <div className="time-column">
          {renderTimeSlots()}
        </div>
        <div className="week-grid">
          {weekDays.map(date => (
            <div key={date.toString()} className="day-column">
              {timeSlots.map(({ hour }) => (
                <div
                  key={hour}
                  className="week-time-slot"
                  onClick={() => onTimeSlotClick(date, hour)}
                >
                  {renderEventInSlot(date, hour)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// DayView Component
const DayView = ({
  currentDate,
  events,
  onEventClick,
  onTimeSlotClick,
  timeSlots,
  categories
}) => {
  const renderEvents = (hour) => {
    const hourEvents = events.filter(event => {
      const eventHour = parseInt(event.startTime.split(':')[0]);
      return isSameDay(parseISO(event.date), currentDate) && eventHour === hour;
    });

    return hourEvents.map(event => {
      const category = categories.find(cat => cat.id === event.category);
      const duration = parseInt(event.endTime.split(':')[0]) - parseInt(event.startTime.split(':')[0]);

      return (
        <div
          key={event.id}
          className="day-event"
          style={{
            backgroundColor: category?.color,
            height: `${duration * 40}px`
          }}
          onClick={() => onEventClick(event)}
        >
          <div className="event-title">{event.title}</div>
          <div className="event-time">
            {event.startTime} - {event.endTime}
          </div>
          <div className="event-location">{event.location}</div>
        </div>
      );
    });
  };

  return (
    <div className="day-view">
      <div className="day-header">
        <h3>{format(currentDate, 'EEEE, MMMM d, yyyy')}</h3>
      </div>
      <div className="day-body">
        <div className="time-column">
          {timeSlots.map(({ hour, time }) => (
            <div key={hour} className="time-slot">
              <span className="time-label">{time}</span>
            </div>
          ))}
        </div>
        <div className="events-column">
          {timeSlots.map(({ hour }) => (
            <div
              key={hour}
              className="day-time-slot"
              onClick={() => onTimeSlotClick(currentDate, hour)}
            >
              {renderEvents(hour)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// EventModal Component
const EventModal = ({
  event,
  timeSlot,
  onSave,
  onDelete,
  onClose,
  categories
}) => {
  const [formData, setFormData] = useState({
    id: event?.id || Date.now(),
    title: event?.title || '',
    description: event?.description || '',
    date: event?.date || timeSlot?.date || new Date(),
    startTime: event?.startTime || timeSlot?.startTime || '09:00',
    endTime: event?.endTime || timeSlot?.endTime || '10:00',
    category: event?.category || categories[0].id,
    location: event?.location || '',
    attendees: event?.attendees || [],
    isCompleted: event?.isCompleted || false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event.id);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="event-modal">
        <div className="modal-header">
          <h3>{event ? 'Edit Event' : 'New Event'}</h3>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                title: e.target.value
              }))}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                description: e.target.value
              }))}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={format(new Date(formData.date), 'yyyy-MM-dd')}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  date: new Date(e.target.value)
                }))}
                required
              />
            </div>

            <div className="form-group">
              <label>Start Time</label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  startTime: e.target.value
                }))}
                required
              />
            </div>

            <div className="form-group">
              <label>End Time</label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  endTime: e.target.value
                }))}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                category: Number(e.target.value)
              }))}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                location: e.target.value
              }))}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.isCompleted}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  isCompleted: e.target.checked
                }))}
              />
              Mark as completed
            </label>
          </div>

          <div className="modal-footer">
            {event && (
              <button
                type="button"
                className="delete-button"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-button">
              {event ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Calendar Component
const Calendar = () => {
  // State Management
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [view, setView] = useState('month');
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [filters, setFilters] = useState({
    categories: [],
    showCompleted: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Constants
  const CATEGORIES = [
    { id: 1, name: 'Meeting', color: '#4CAF50' },
    { id: 2, name: 'Deadline', color: '#f44336' },
    { id: 3, name: 'Personal', color: '#2196F3' },
    { id: 4, name: 'Other', color: '#9E9E9E' }
  ];

  const TIME_SLOTS = Array.from({ length: 24 }, (_, hour) => ({
    hour,
    time: format(addHours(startOfMonth(new Date()), hour), 'h:mm a')
  }));

  // Event Handlers
  const handleDateChange = (direction) => {
    if (view === 'month') {
      setCurrentDate(prev => 
        direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1)
      );
    } else if (view === 'week') {
      setCurrentDate(prev => 
        direction === 'next' ? addDays(prev, 7) : addDays(prev, -7)
      );
    } else {
      setCurrentDate(prev => 
        direction === 'next' ? addDays(prev, 1) : addDays(prev, -1)
      );
    }
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot({
      date,
      startTime: '09:00',
      endTime: '10:00'
    });
    setShowEventModal(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleTimeSlotClick = (date, hour) => {
    setSelectedTimeSlot({
      date,
      startTime: `${hour.toString().padStart(2, '0')}:00`,
      endTime: `${(hour + 1).toString().padStart(2, '0')}:00`
    });
    setShowEventModal(true);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const handleEventSave = (eventData) => {
    setEvents(prev => {
      const existingEventIndex = prev.findIndex(e => e.id === eventData.id);
      if (existingEventIndex >= 0) {
        // Update existing event
        const updatedEvents = [...prev];
        updatedEvents[existingEventIndex] = eventData;
        return updatedEvents;
      } else {
        // Add new event
        return [...prev, eventData];
      }
    });
  };

  const handleEventDelete = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  // Filter events based on current filters
  const getFilteredEvents = useCallback(() => {
    return events.filter(event => {
      if (filters.categories.length && !filters.categories.includes(event.category)) {
        return false;
      }
      if (!filters.showCompleted && event.isCompleted) {
        return false;
      }
      return true;
    });
  }, [events, filters]);

  // Fetch initial events

  useEffect(() => {
    const fetchEvents = async () => {
      // setIsLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockEvents = [
          {
            id: 1,
            title: 'Team Meeting',
            description: 'Weekly team sync',
            date: new Date(),
            startTime: '10:00',
            endTime: '11:00',
            category: 1,
            location: 'Conference Room A',
            isCompleted: false
          },
          {
            id: 2,
            title: 'Project Deadline',
            description: 'Submit final deliverables',
            date: addDays(new Date(), 3),
            startTime: '15:00',
            endTime: '16:00',
            category: 2,
            location: 'Online',
            isCompleted: false
          }
        ];
        
        console.log('Mock events fetched:', mockEvents); // Log the mock data
      
        // setEvents(mockEvents); // Set the events state
      } 
      catch (err) {
        setError('Failed to fetch events');
        console.error('Error fetching events:', err);
      } 
      finally {
        setIsLoading();
      }
    };

    fetchEvents();
  }, []);




  

  // Add persistent state for view mode
  useEffect(() => {
    const savedView = localStorage.getItem('calendarView');
    if (savedView) {
      setView(savedView);
    }
  }, []);

  // Save view mode when it changes
  useEffect(() => {
    localStorage.setItem('calendarView', view);
  }, [view]);

  // Render appropriate view
  const renderView = () => {
    const filteredEvents = getFilteredEvents();

    switch (view) {
      case 'month':
        return (
          <MonthView
            currentDate={currentDate}
            events={filteredEvents}
            selectedDate={selectedDate}
            onDateClick={handleDateClick}
            onEventClick={handleEventClick}
            categories={CATEGORIES}
          />
        );
      case 'week':
        return (
          <WeekView
            currentDate={currentDate}
            events={filteredEvents}
            selectedDate={selectedDate}
            onDateClick={handleDateClick}
            onEventClick={handleEventClick}
            onTimeSlotClick={handleTimeSlotClick}
            timeSlots={TIME_SLOTS}
            categories={CATEGORIES}
          />
        );
      case 'day':
        return (
          <DayView
            currentDate={currentDate}
            events={filteredEvents}
            onEventClick={handleEventClick}
            onTimeSlotClick={handleTimeSlotClick}
            timeSlots={TIME_SLOTS}
            categories={CATEGORIES}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="calendar-wrapper">
        <div className="calendar-loading">
          <div className="loading-spinner"></div>
          <p>Loading calendar...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="calendar-error">{error}</div>;
  }

  return (
    <div className="calendar">
      <CalendarHeader
        currentDate={currentDate}
        view={view}
        onViewChange={handleViewChange}
        onDateChange={handleDateChange}
        filters={filters}
        onFilterChange={handleFilterChange}
        categories={CATEGORIES}
      />
      
      <div className="calendar-body">
        {renderView()}
      </div>

      {showEventModal && (
        <EventModal
          event={selectedEvent}
          timeSlot={selectedTimeSlot}
          onSave={handleEventSave}
          onDelete={handleEventDelete}
          onClose={() => {
            setShowEventModal(false);
            setSelectedEvent(null);
            setSelectedTimeSlot(null);
          }}
          categories={CATEGORIES}
        />
      )}
    </div>
  );
};

export default Calendar;