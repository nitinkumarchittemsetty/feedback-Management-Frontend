import React, { useState } from 'react';
import './AdminDashboard.css';
import { useFeedback } from './FeedbackContext';
import AddCourse from './AddCourse'; // Import the AddCourse component
import AddFeedback from './AddFeedback'; // Import the AddFeedback component
import ViewFeedback from './ViewFeedback'; // Import the ViewFeedback component

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('addCourse'); // Default to Add Courses section

  return (
    <div className="admin-dashboard-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Admin Panel</h3>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a
              href="#add-courses"
              onClick={() => setActiveSection('addCourse')}
            >
              <i className="icon-courses"></i>Add Courses
            </a>
          </li>
          <li>
            <a
              href="#add-feedback"
              onClick={() => setActiveSection('addFeedback')}
            >
              <i className="icon-feedback"></i>Add Feedback
            </a>
          </li>
          <li>
            <a
              href="#view-feedback"
              onClick={() => setActiveSection('viewFeedback')}
            >
              <i className="icon-view-feedback"></i>View Feedback
            </a>
          </li>
          <li>
            <a href="#logout">
              <i className="icon-logout"></i>Logout
            </a>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        {activeSection === 'addCourse' && <AddCourse />}
        {activeSection === 'addFeedback' && <AddFeedback />}
        {activeSection === 'viewFeedback' && <ViewFeedback />}
      </div>
    </div>
  );
};

export default AdminDashboard;
