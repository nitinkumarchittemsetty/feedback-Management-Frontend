import React, { useState } from "react";
import "./StudentDashboard.css";

const feedbackQuestions = {
  "2023-2024": {
    "Odd Sem": {
      "Coding Training": [
        "How would you rate the teaching quality in Coding Training?",
        "Was the course content clear and understandable?",
      ],
      "GLOBAL LOGIC BUILDING CONTEST PRACTICUM": [
        "How effective was the instructor in explaining the logic building concepts?",
        "Did you find the assignments relevant and challenging?",
      ],
      "ENTERPRISE PROGRAMMING": [
        "How would you rate the hands-on experience in Enterprise Programming?",
        "Was the course content up-to-date and industry relevant?",
      ],
    },
    "Even Sem": {
      "DATA WAREHOUSING & MINING": [
        "How would you rate the practical sessions in Data Warehousing & Mining?",
        "Was the hands-on experience provided adequate?",
      ],
      "DATA ANALYTICS AND VISUALIZATION": [
        "How effectively was data visualization taught?",
        "Was the data analysis practicals useful in understanding the concepts?",
      ],
      "SOFTWARE VERIFICATION & VALIDATION": [
        "How would you rate the clarity in teaching Software Verification & Validation?",
        "Were the assignments helpful in grasping the concepts?",
      ],
    },
  },
  "2024-2025": {
    "Odd Sem": {
      "JAVA FULL STACK DEVELOPMENT + MICROSERVICES": [
        "How would you rate the hands-on sessions in Full Stack Development?",
        "Was the course content relevant to industry standards?",
      ],
      "PROBLEM SOLVING & REASONING SKILLS-2": [
        "How effective were the problem-solving sessions in Problem Solving & Reasoning Skills-2?",
        "Were the practical exercises challenging?",
      ],
      "DATA DRIVEN ARTIFICIAL INTELLIGENT SYSTEMS": [
        "How would you rate the practical knowledge gained in Data Driven AI Systems?",
        "Were the examples used helpful in understanding the concepts?",
      ],
    },
    "Even Sem": {
      "DATABASE MANAGEMENT SYSTEMS": [
        "How would you rate the course on Database Management Systems?",
        "Was the hands-on experience provided adequate?",
      ],
      "ADAPTIVE SOFTWARE ENGINEERING": [
        "How would you rate the coverage of adaptive techniques in software development?",
        "Were the assignments relevant to real-world scenarios?",
      ],
      "AUTOMATA THEORY AND FORMAL LANGUAGES": [
        "How effective was the instructor in teaching Automata Theory?",
        "Did you find the examples used helpful in understanding formal languages?",
      ],
    },
  },
};

const StudentFeedbackForm = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [feedback, setFeedback] = useState({});
  const [academicYear, setAcademicYear] = useState("");
  const [semester, setSemester] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    setWarningMessage(
      academicYear && semester
        ? "Changing the semester or academic year will reset the feedback for the courses."
        : ""
    );
    if (academicYear && semester) {
      setFeedback({ ...feedback, [course]: {} });
    }
  };

  const handleRatingChange = (questionIndex, rating) => {
    setFeedback((prev) => ({
      ...prev,
      [selectedCourse]: {
        ...prev[selectedCourse],
        [questionIndex]: rating,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (academicYear && semester && selectedCourse) {
      setSubmitted(true);
    } else {
      setWarningMessage(
        "Please select an academic year, semester, and course before submitting feedback."
      );
    }
  };

  const handleBack = () => {
    setSubmitted(false);
    setSelectedCourse("");
    setWarningMessage("");
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h1>Student Feedback Form</h1>
        <p>Select an academic year and semester, then choose a course:</p>

        <div className="selection-container">
          <label htmlFor="academicYear">Academic Year:</label>
          <select
            id="academicYear"
            value={academicYear}
            onChange={(e) => {
              setAcademicYear(e.target.value);
              setSelectedCourse(""); // Reset selected course when year changes
              setSemester(""); // Reset semester when year changes
              setWarningMessage(
                "Changing the academic year will reset the feedback for the courses."
              );
            }}
          >
            <option value="">Select Year</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>

          <label htmlFor="semester">Semester:</label>
          <select
            id="semester"
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              setSelectedCourse(""); // Reset selected course when semester changes
              setWarningMessage(
                "Changing the semester will reset the feedback for the courses."
              );
            }}
          >
            <option value="">Select Semester</option>
            <option value="Odd Sem">Odd Sem</option>
            <option value="Even Sem">Even Sem</option>
          </select>
        </div>

        {warningMessage && <p className="warning-message">{warningMessage}</p>}

        {!submitted ? (
          <div>
            {academicYear && semester && (
              <div className="course-selection">
                {Object.keys(feedbackQuestions[academicYear][semester]).map(
                  (course) => (
                    <button
                      key={course}
                      className={`course-button ${
                        selectedCourse === course ? "active" : ""
                      }`}
                      onClick={() => handleCourseChange(course)}
                    >
                      {course}
                    </button>
                  )
                )}
              </div>
            )}

            {selectedCourse && (
              <form onSubmit={handleSubmit} className="feedback-form">
                <h2>Feedback for {selectedCourse}</h2>
                {feedbackQuestions[academicYear][semester][selectedCourse].map(
                  (question, questionIndex) => (
                    <div key={questionIndex} className="question-feedback">
                      <p>{question}</p>
                      <div className="rating-options">
                        {Array.from({ length: 5 }, (_, i) => i + 1).map(
                          (rating) => (
                            <label key={rating}>
                              <input
                                type="radio"
                                name={`${selectedCourse}-${questionIndex}`} // Unique name for each question
                                value={rating}
                                onChange={() =>
                                  handleRatingChange(questionIndex, rating)
                                }
                                required
                              />
                              {rating}
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
                <button type="submit" className="submit-button">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="feedback-success">
            <h2>Thank you for your feedback!</h2>
            <p>Your responses have been recorded.</p>
            <button onClick={handleBack} className="back-button">
              Give feedback for another course
            </button>
            <div className="feedback-summary">
              <h3>Feedback Summary:</h3>
              {Object.keys(feedback).map((course) => (
                <div key={course}>
                  <h4>{course}</h4>
                  {Object.entries(feedback[course]).map(
                    ([questionIndex, rating]) => (
                      <p key={questionIndex}>
                        {feedbackQuestions[academicYear][semester][course][
                          questionIndex
                        ]}:{" "}
                        <strong>{rating}</strong>
                      </p>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentFeedbackForm;
