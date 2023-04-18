import React, { useState } from 'react';
import RegisteredCourses from  './Student/StuRegCrsG'
import SetGradeForm from './Instractor/SetGrades';
import AdminManageCourses from './Admin/AdminManageCourses';
import { Link } from 'react-router-dom';





export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Send the login credentials to the backend API
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login successful:', data);
        setUserType(data.type);
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Display an error message to the user
        alert('Login failed. Please try again.');
      });
  };

  if (userType === '') {
    return (
      <div className='login-contain'>
        <h1 >Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <br />
          <button type="submit">Login</button>
          <p> <Link to={"/RegistrationForm"}>RegistrationForm</Link> </p>
        </form>
      </div>
    );
  } else if (userType === 'student') {
    return <RegisteredCourses />;
  } else if (userType === 'teacher') {
    return <SetGradeForm />;
  } else if (userType === 'admin') {
    return <AdminManageCourses />;
  } else {
    console.error('Invalid user type:', userType);
    return <div>An error occurred. Please try again later.</div>;
  }
}

