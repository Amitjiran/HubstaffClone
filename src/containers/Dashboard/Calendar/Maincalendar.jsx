import Calendarhd from "./Calanderhd";
import React from 'react';
import Calendar from "./Calendar";

const Maincalendar = () => {
  return (
    <div className="calendar-container">
      <Calendarhd />
      <Calendar /> 
    </div>
  );
};

export default Maincalendar;