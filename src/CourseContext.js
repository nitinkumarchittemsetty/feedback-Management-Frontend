import React, { createContext, useContext, useState } from 'react';

// Create context
const CourseContext = createContext();

// Custom hook to use context
export const useCourse = () => useContext(CourseContext);

// Context Provider component
const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  const addCourse = (newCourse) => setCourses((prev) => [...prev, newCourse]);

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
