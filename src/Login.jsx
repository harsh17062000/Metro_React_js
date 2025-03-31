import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import './LoginPage.css'; // Optional: For styling purposes

function LoginPage() {
  // State variables for form data and error messages
  const [data, setData] = useState({email:"",password:""});
  const [sing, setSing] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let Loginnav=useNavigate()

  // Handle form submission
  function inchange(e){
    const {name,value}=e.target
    setData({...data,[name]: value})
  }
//   const handleSubmit = (e) => {
//     e.preventDefault();

    function handleSubmit(e){
        e.preventDefault()
        if (sing.username != data.username || sing.password != data.password) {
          alert("user not found");
        }
        else{
          alert("data save successfulu")
          Loginnav("/")
        }
      }

    // Basic form validation
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Here you can add your login logic (e.g., API call)
    // For now, we just simulate successful login
    alert('Login successful!');
    
    // Reset form and error
    setEmail('');
    setPassword('');
    setError('');
  


  

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Display error message if any */}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={inchange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={inchange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      
    </div>
  );
}

export default LoginPage;
