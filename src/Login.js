import React, { useState } from 'react';
import RegisteredCourses from  './Student/StuRegCrsG'
import SetGradeForm from './Instractor/SetGrades';
import AdminManageCourses from './Admin/AdminManageCourses';
import { Link } from 'react-router-dom';
import axios from "axios";
import "../src/Components/App.css";




export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
      e.preventDefault();
      // Send the login credentials to the backend API
      axios.post('http://localhost:4000/login', { username, password, role })
        .then(response => {
          console.log('Login successful:', response.data);
          setRole(response.data.role);
        })
        .catch(error => {
          console.error('Login failed:', error);
          // Display an error message to the user
          alert('Login failed. Please try again.');
        });
    };
  

  if (role === '') {
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
  } else if (role === 'student') {
    return <RegisteredCourses />;
  } else if (role === 'teacher') {
    return <SetGradeForm />;
  } else if (role === 'admin') {
    return <AdminManageCourses />;
  } else {
    console.error('Invalid user type:', role);
    return <div>An error occurred. Please try again later.</div>;
  };


};
