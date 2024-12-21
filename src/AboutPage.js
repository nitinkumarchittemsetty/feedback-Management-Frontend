import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About the Student Feedback Management System</h1>
      <div className="content">
        <section>
          <h2>1. Overview of the System</h2>
          <p>The Student Feedback Management System is a comprehensive platform designed to streamline the process of gathering and managing feedback...</p>
        </section>

        <section>
          <h2>2. Key Features</h2>
          <ul>
            <li><strong>Feedback Collection:</strong> Allows students to submit feedback on various aspects...</li>
            <li><strong>Feedback Analysis:</strong> Advanced analytics tools to generate comprehensive reports...</li>
            <li><strong>Anonymity and Privacy:</strong> The system ensures all student responses remain anonymous...</li>
            <li><strong>Customizable Surveys:</strong> Surveys tailored to different departments...</li>
            <li><strong>Response Management:</strong> Feedback is efficiently categorized and organized...</li>
          </ul>
        </section>

        <section>
          <h2>3. Purpose and Objectives</h2>
          <p>The system aims to foster open communication between students and institutions...</p>
        </section>

        <section>
          <h2>4. Target Audience</h2>
          <p>The system serves students, faculty, and administrators by providing feedback tools...</p>
        </section>

        <section>
          <h2>5. Benefits of Using the System</h2>
          <ul>
            <li><strong>For Students:</strong> The system empowers students by giving them a voice in shaping their education...</li>
            <li><strong>For Faculty:</strong> Instructors gain insights into their teaching effectiveness...</li>
            <li><strong>For Institutions:</strong> It provides actionable data for informed decisions...</li>
          </ul>
        </section>

        <section>
          <h2>6. Technical Information</h2>
          <p>The feedback management system is built using Java, Spring Boot, Hibernate, and MySQL...</p>
        </section>

        <section>
          <h2>7. Developer or Team Information</h2>
          <p>The system was developed by a team of experienced Java full-stack developers...</p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>
            Email: support@feedbacksystem.edu<br/>
            Phone: +1 (555) 123-4567<br/>
            Address: 123 University Ave, Education City, CA 90000
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
