import React from 'react';
import './FacultyDashboard.css'; // Create this file to style the dashboard

const FacultyDashboard = () => {
  return (
    <div className="faculty-dashboard">
      <h1>Faculty Dashboard</h1>
      <p>Welcome, Faculty! You can view feedback, manage courses, and track performance here.</p>
      
      <div className="faculty-actions">
        <button className="action-btn">View Student Feedback</button>
        <button className="action-btn">Manage Your Courses</button>
        <button className="action-btn">Performance Evaluation</button>
      </div>
    </div>
  );
};

export default FacultyDashboard;
