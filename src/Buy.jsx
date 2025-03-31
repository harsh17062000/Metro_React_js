import React, { useState } from 'react';
// import './BuyForm.css'; // Optional: for styling the form

function BuyForm() {
  // State to manage the form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [payment, setPayment] = useState('');
  const [shoeSize, setShoeSize] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !address || !email || !payment || !shoeSize) {
      setError('Please fill in all the fields.');
      return;
    }

    // Simulating a successful order submission (you can add API calls here)
    setSuccessMessage('Thank you for your order! Your purchase is confirmed.');
    setError('');
    // Reset form after submission
    setName('');
    setAddress('');
    setEmail('');
    setPayment('');
    setShoeSize('');
  };

  return (
    <div className="buy-form-container">
      <h2>Buy Your Shoes</h2>

      {/* Display error or success messages */}
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your shipping address"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="shoeSize">Shoe Size</label>
          <select
            id="shoeSize"
            value={shoeSize}
            onChange={(e) => setShoeSize(e.target.value)}
            required
          >
            <option value="">Select Shoe Size</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="payment">Payment Method</label>
          <select
            id="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>

        <button type="submit" className="buy-btn">Place Order</button>
      </form>
    </div>
  );
}

export default BuyForm;
