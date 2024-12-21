import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="navbar">
        <h1>Feedback Management</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Updated Contact link */}
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </div>

      <div className="content">
        <h1>Student Feedback Management and Evaluation</h1>
        <p>Manage and evaluate feedback easily with our streamlined system.</p>
        <div className="buttons">
          <Link to="/signup" className="btn primary">Get Started</Link>
          <Link to="/about" className="btn secondary">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
