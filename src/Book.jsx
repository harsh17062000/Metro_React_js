import React from 'react';
import { useNavigate } from 'react-router-dom';

const MetroBook = () => {
  // This helps us navigate to another page
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' , height:"40vh" }}>
      {/* Title */}
      <h1 style={{ color: 'blue' }}>🚉 Welcome to Metro Services!</h1>
      
      {/* Description */}
      <p>Fast, affordable, and eco-friendly travel. Book your ticket now!</p>
      
      {/* Button to navigate to the reservation page */}
      <button 
        onClick={() => navigate('/reserve')} 
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width:"250px",
          height:"50px"
        }}
      >
        Book Your Metro Ticket 🚆
      </button>
    </div>
  );
};

export default MetroBook;
