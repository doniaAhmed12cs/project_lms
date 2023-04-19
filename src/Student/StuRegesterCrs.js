import React, { useState } from 'react';
import "../Components/App.css";

function RegisterCourses() {
  const [courses,setCourses ] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectCourse = (event) => {
    const courseId = event.target.value;
    const course = courses.find(course => course.id === courseId);
    setSelectedCourses([...selectedCourses, course]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the selected courses to the backend API for registration
    fetch('/api/register-courses', {
      method: 'POST',
      body: JSON.stringify(selectedCourses),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className='StuRegester'>
      <h1>Register for Courses</h1>
      <p>Select the courses you want to register for:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" value="course-1" onChange={handleSelectCourse} />
          Course 1
        </label>
        <label>
          <input type="checkbox" value="course-2" onChange={handleSelectCourse} />
          Course 2
        </label>
        <label>
          <input type="checkbox" value="course-3" onChange={handleSelectCourse} />
          Course 3
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterCourses