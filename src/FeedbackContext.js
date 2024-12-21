import React, { createContext, useState, useContext } from 'react';

// Create Feedback Context
const FeedbackContext = createContext();

// Hook to Use Feedback Context
export const useFeedback = () => useContext(FeedbackContext);

// FeedbackProvider to Wrap Application
export const FeedbackProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <FeedbackContext.Provider value={{ questions, addQuestion }}>
      {children}
    </FeedbackContext.Provider>
  );
};
