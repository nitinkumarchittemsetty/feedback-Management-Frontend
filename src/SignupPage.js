import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from './apiService';

const SignupPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Student');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const validateName = (name) => /^[a-zA-Z]+$/.test(name); // Only letters allowed
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Standard email regex

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target[0].value.trim();
    const lastName = event.target[1].value.trim();
    const email = event.target[2].value.trim();
    const password = event.target[3].value.trim();
    const selectedRole = event.target[4].value;

    // Validate first and last names
    if (!validateName(firstName) || !validateName(lastName)) {
      setNameError('First and Last Name should contain only letters.');
      return;
    } else {
      setNameError('');
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    try {
      const formData = {
        username: `${firstName} ${lastName}`,
        email,
        password,
        userType: selectedRole,
        mobile: '1234567890',
      };
      const response = await signupUser(formData);
      alert(response);
      navigate('/signin');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg"
            alt="Signup Illustration"
            className="signup-illustration"
          />
        </div>
        <div className="signup-right">
          <h2>Join Us!</h2>
          <p>Sign up to start giving feedback.</p>
          <form className="signup-form" onSubmit={handleSignupSubmit}>
            <input
              type="text"
              placeholder="First Name"
              required
              pattern="[A-Za-z]+" // HTML5 Validation for letters only
              title="First name should contain only letters"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              pattern="[A-Za-z]+" // HTML5 Validation for letters only
              title="Last name should contain only letters"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              onBlur={(e) => {
                if (!validateEmail(e.target.value)) {
                  setEmailError('Please enter a valid email address.');
                } else {
                  setEmailError('');
                }
              }}
            />
            {emailError && <p className="error-text">{emailError}</p>}
            {nameError && <p className="error-text">{nameError}</p>}
            <input type="password" placeholder="Password" required />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Admin">Admin</option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
          <button className="back-btn" onClick={() => navigate('/')}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
