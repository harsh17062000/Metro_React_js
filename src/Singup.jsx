import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './SignUpPage.css'; // Optional: For styling

function SignUpPage() {
  // State to store input fields and error/success messages
  const [name1, setName] = useState({username:"",email:"",password:"",confirmPassword:""});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  let Loginnav=useNavigate();


  function inchange(e)
  {
    const {name,value}=e.target
    setName({...name1,[name]:value})

  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userdata",JSON.stringify(name1))
    Loginnav("/logg")

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Here you would send the data to your API for user registration
    // For now, let's simulate a successful signup
    setSuccessMessage('Account created successfully! Please check your email to confirm.');
    setError('');
    
    // Reset form after submission
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>

      {/* Display error or success messages */}
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="username"
            onChange={inchange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            // value={email}
            onChange={inchange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            // value={password}
            onChange={inchange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            // value={confirmPassword}
            onChange={inchange}
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>

    </div>
  );
}

export default SignUpPage;
