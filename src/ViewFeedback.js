import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ViewFeedback = () => {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);
  
  // Updated course names
  const allCourses = {
    "2024": {
      "Odd": ["Maths", "Physics", "Datawarehousing and Mining", "Data Science", "JFSD"],
      "Even": ["Maths", "Physics", "Datawarehousing and Mining", "Data Science", "JFSD"]
    },
    "2023": {
      "Odd": ["Maths", "Physics", "Datawarehousing and Mining", "Data Science", "JFSD"],
      "Even": ["Maths", "Physics", "Datawarehousing and Mining", "Data Science", "JFSD"]
    }
  };

  // Updated feedback data with Indian student names
  const allFeedbackData = {
    "Maths": [
      { name: "Nitin", rating: 4 },
      { name: "Moksha", rating: 5 },
      { name: "Deva", rating: 3 },
      { name: "Yaswanth", rating: 4 },
      { name: "Naziya", rating: 2 },
      { name: "Kousik", rating: 5 },
      { name: "Rajesh", rating: 3 },
      { name: "Sujal", rating: 4 },
      { name: "Surya", rating: 5 }
    ],
    "Physics": [
      { name: "Nitin", rating: 4 },
      { name: "Moksha", rating: 5 },
      { name: "Deva", rating: 3 },
      { name: "Yaswanth", rating: 4 },
      { name: "Naziya", rating: 2 },
      { name: "Kousik", rating: 5 },
      { name: "Rajesh", rating: 3 },
      { name: "Sujal", rating: 4 },
      { name: "Surya", rating: 5 }
    ],
    "Datawarehousing and Mining": [
      { name: "Nitin", rating: 4 },
      { name: "Moksha", rating: 5 },
      { name: "Deva", rating: 3 },
      { name: "Yaswanth", rating: 4 },
      { name: "Naziya", rating: 2 },
      { name: "Kousik", rating: 5 },
      { name: "Rajesh", rating: 3 },
      { name: "Sujal", rating: 4 },
      { name: "Surya", rating: 5 }
    ],
    "Data Science": [
      { name: "Nitin", rating: 4 },
      { name: "Moksha", rating: 5 },
      { name: "Deva", rating: 3 },
      { name: "Yaswanth", rating: 4 },
      { name: "Naziya", rating: 2 },
      { name: "Kousik", rating: 5 },
      { name: "Rajesh", rating: 3 },
      { name: "Sujal", rating: 4 },
      { name: "Surya", rating: 5 }
    ],
    "JFSD": [
      { name: "Nitin", rating: 4 },
      { name: "Moksha", rating: 5 },
      { name: "Deva", rating: 3 },
      { name: "Yaswanth", rating: 4 },
      { name: "Naziya", rating: 2 },
      { name: "Kousik", rating: 5 },
      { name: "Rajesh", rating: 3 },
      { name: "Sujal", rating: 4 },
      { name: "Surya", rating: 5 }
    ]
  };

  const handleAcademicYearChange = (e) => {
    setAcademicYear(e.target.value);
    setSemester('');
    setCourses([]);
    setSelectedCourse(null);
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    if (academicYear) {
      setCourses(allCourses[academicYear][e.target.value]);
    }
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setFeedbackData(allFeedbackData[course]);
  };

  const calculateAverageRating = () => {
    if (!feedbackData || feedbackData.length === 0) return 0;
    const total = feedbackData.reduce((acc, curr) => acc + curr.rating, 0);
    return (total / feedbackData.length).toFixed(2);
  };

  const calculatePercentage = () => {
    const totalRatings = feedbackData.length * 5; // assuming max rating is 5
    const sumRatings = feedbackData.reduce((acc, curr) => acc + curr.rating, 0);
    return ((sumRatings / totalRatings) * 100).toFixed(2);
  };

  // Data for chart (short graph as requested)
  const chartData = {
    labels: feedbackData.map((data) => data.name),
    datasets: [
      {
        label: 'Feedback Ratings',
        data: feedbackData.map((data) => data.rating),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>View Feedback</h1>

      <div>
        <label>Academic Year: </label>
        <select value={academicYear} onChange={handleAcademicYearChange}>
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <div>
        <label>Semester: </label>
        <select value={semester} onChange={handleSemesterChange} disabled={!academicYear}>
          <option value="">Select Semester</option>
          <option value="Odd">Odd</option>
          <option value="Even">Even</option>
        </select>
      </div>

      {courses.length > 0 && (
        <div>
          <button onClick={() => setCourses(courses)}>Show Courses</button>
          <ul>
            {courses.map((course, index) => (
              <li key={index}>
                <button onClick={() => handleCourseSelect(course)}>{course}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedCourse && feedbackData.length > 0 && (
        <div>
          <h2>Feedback for {selectedCourse}</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Average Rating: {calculateAverageRating()}</h3>
          <h3>Percentage: {calculatePercentage()}%</h3>

          <div style={{ width: '50%', height: '300px' }}> {/* Short graph */}
            <Line data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewFeedback;
