import React from 'react';

function About() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1495562091148-2f4efe7301df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Metro"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold mb-4">About Metro</h1>
            <p className="lead">
              At Metro, we strive to make your journeys effortless. With state-of-the-art
              technology and a focus on customer convenience, we connect you to your
              destinations quickly, safely, and efficiently.
            </p>
            <p>
              Whether you're commuting to work, exploring the city, or visiting loved
              ones, Metro is here to ensure your travels are smooth and enjoyable.
            </p>
            <a href="/contact" className="btn btn-primary mt-3">
              Know more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
