import React, { useState, useEffect } from "react";
import "./AddCourse.css";

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    subjectCode: "",
    courseNumber: "",
    courseTitle: "",
  });

  const [editIndex, setEditIndex] = useState(-1); // Track the index of the course being edited

  // Load courses from localStorage when the component mounts
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses"));
    if (savedCourses) {
      setCourses(savedCourses);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle add or update course
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex >= 0) {
      // Update course
      const updatedCourses = [...courses];
      updatedCourses[editIndex] = formData;
      setCourses(updatedCourses);
      localStorage.setItem("courses", JSON.stringify(updatedCourses)); // Save to localStorage
      setEditIndex(-1); // Reset edit index
    } else {
      // Add new course
      const updatedCourses = [...courses, formData];
      setCourses(updatedCourses);
      localStorage.setItem("courses", JSON.stringify(updatedCourses)); // Save to localStorage
    }

    // Reset form
    setFormData({ subjectCode: "", courseNumber: "", courseTitle: "" });
  };

  // Handle edit
  const handleEdit = (index) => {
    setFormData(courses[index]);
    setEditIndex(index);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses)); // Save to localStorage
  };

  return (
    <div className="add-course-container">
      <h2>Add Course</h2>
      {/* Form for adding or editing courses */}
      <form onSubmit={handleSubmit} className="add-course-form">
        <div className="form-group">
          <label>Subject Code:</label>
          <input
            type="text"
            name="subjectCode"
            value={formData.subjectCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Number:</label>
          <input
            type="text"
            name="courseNumber"
            value={formData.courseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Title:</label>
          <input
            type="text"
            name="courseTitle"
            value={formData.courseTitle}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          {editIndex >= 0 ? "Update Course" : "Add Course"}
        </button>
      </form>

      {/* Display added courses in a table */}
      <h2>Added Courses</h2>
      {courses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Course Number</th>
              <th>Course Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.subjectCode}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseTitle}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="edit-btn"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-btn"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses added yet.</p>
      )}
    </div>
  );
};

export default AddCourse;
