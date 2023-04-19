import React, { useState } from 'react';
import axios from 'axios';
import "../src/Components/App.css"
const RegistrationForm = () => {
  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    // Perform validation
    
    axios.post('http://localhost:4000/register', register)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={register.firstName} onChange={handleInputChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={register.lastName} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={register.email} onChange={handleInputChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={register.password} onChange={handleInputChange} />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={register.confirmPassword} onChange={handleInputChange} />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
