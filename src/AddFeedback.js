import React, { useState, useEffect } from "react";
import "./AddFeedback.css";

const AddFeedback = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courses, setCourses] = useState(["Mathematics", "Physics"]); // Example courses
  const [selectedCourse, setSelectedCourse] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", ""]); // For 3 options initially
  const [questions, setQuestions] = useState([]);

  // Load feedback questions from localStorage on component mount
  useEffect(() => {
    const storedQuestions = localStorage.getItem("feedbackQuestions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    }
  }, []);

  // Save feedback questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("feedbackQuestions", JSON.stringify(questions));
  }, [questions]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (
      academicYear &&
      semester &&
      selectedCourse &&
      newQuestion.trim() &&
      options.every((opt) => opt.trim())
    ) {
      const newEntry = {
        academicYear,
        semester,
        course: selectedCourse,
        question: newQuestion,
        options,
      };
      const updatedQuestions = [...questions, newEntry];
      setQuestions(updatedQuestions); // Update state
      setNewQuestion(""); // Reset question input
      setOptions(["", "", ""]); // Reset options
    }
  };

  return (
    <div className="add-feedback-container">
      <h2>Add Feedback</h2>
      <div className="feedback-form">
        <div className="form-group">
          <label htmlFor="academic-year-select">Select Academic Year:</label>
          <select
            id="academic-year-select"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
          >
            <option value="" disabled>
              -- Select Academic Year --
            </option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="semester-select">Select Semester:</label>
          <select
            id="semester-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="" disabled>
              -- Select Semester --
            </option>
            <option value="Odd Sem">Odd Sem</option>
            <option value="Even Sem">Even Sem</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="course-select">Select Course:</label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="" disabled>
              -- Select a Course --
            </option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <form onSubmit={handleAddQuestion}>
          <div className="form-group">
            <label htmlFor="question-input">Question:</label>
            <textarea
              id="question-input"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Enter feedback question"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Options:</label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...options];
                  updatedOptions[index] = e.target.value;
                  setOptions(updatedOptions);
                }}
                placeholder={`Option ${index + 1}`}
                required
              />
            ))}
          </div>

          <button type="submit">Add Question</button>
        </form>
      </div>

      <div className="feedback-table">
        <h3>Feedback Questions</h3>
        <table>
          <thead>
            <tr>
              <th>Academic Year</th>
              <th>Semester</th>
              <th>Course</th>
              <th>Question</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, index) => (
              <tr key={index}>
                <td>{q.academicYear}</td>
                <td>{q.semester}</td>
                <td>{q.course}</td>
                <td>{q.question}</td>
                <td>{q.options.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddFeedback;
