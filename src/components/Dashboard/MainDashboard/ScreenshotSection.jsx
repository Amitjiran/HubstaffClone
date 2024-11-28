// src/components/Dashboard/ScreenshotSection.jsx
import React from "react";

const ScreenshotSection = () => {
  return (
    <div className="screenshot-container" id="screenshot-container">
      <h3>Recent Screenshots</h3>
      <button id="show-screenshots-btn">Show Screenshots</button>
      <div className="screenshots" id="recent-screenshots"></div>
    </div>
  );
};

export default ScreenshotSection;
