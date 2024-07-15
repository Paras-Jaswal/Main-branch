import React, { useState } from 'react';
import axios from 'axios'
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telNumber: '',
    describesInvestor: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/portfolio/backend/register.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  ;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Telephone Number:</label>
        <input type="text" name="telNumber" value={formData.telNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Describes Investor:</label>
        <input type="text" name="describesInvestor" value={formData.describesInvestor} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
