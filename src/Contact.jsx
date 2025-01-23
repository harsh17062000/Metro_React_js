import React from 'react';

function Contact() {
  return (
    <body className="body3">
        
        <div
      className="py-5 text-white"
      style={{
        backgroundColor:"cadetblue", // Replace with the actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* Heading Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="fw-bold mb-4">Contact Us</h1>
            <p className="lead">
              Have questions or need help? We’re here for you! Fill out the form below or reach out to us directly, and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </body>

  );
}

export default Contact;
