import React, { useState } from 'react';
import './SigninPage.css';
import { useNavigate, Link } from 'react-router-dom';
import { signinUser } from './apiService';

const SigninPage = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('Student');

  const handleSigninSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value.trim();
    const password = event.target[1].value.trim();
    const selectedRole = event.target[2].value;

    try {
      const formData = { email, password, userType: selectedRole };
      const response = await signinUser(formData);
      alert(response);
      if (selectedRole === 'Student') {
        navigate('/student-dashboard');
      } else if (selectedRole === 'Admin') {
        navigate('/admin-dashboard');
      } else if (selectedRole === 'Faculty') {
        navigate('/faculty-dashboard');
      }
    } catch (error) {
      alert(error.message);
    }
  };
return (
  <div className="signin-container">
    <div className="signin-box">
      <div className="signin-left">
        <img
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
          alt="Signin Illustration"
          className="signin-illustration"
        />
      </div>
      <div className="signin-right">
        <h2>Welcome Back!</h2>
        <p>Sign in to access your account and continue managing feedback.</p>
        <form className="signin-form" onSubmit={handleSigninSubmit}>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="Admin">Admin</option>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
          </select>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        <button className="back-btn" onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  </div>
);
};

export default SigninPage;



