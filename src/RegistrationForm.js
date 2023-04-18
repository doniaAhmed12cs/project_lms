import React, {useState} from 'react';



const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = event => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Perform validation and submit form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formValues.firstName} onChange={handleInputChange} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleInputChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={formValues.password} onChange={handleInputChange} />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={handleInputChange} />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;