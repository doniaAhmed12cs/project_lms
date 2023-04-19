import React, { useState } from 'react';
import axios from 'axios';
import "../Components/App.css";

function AssignInstructorToCours() {
  const [courseId, setCourseId] = useState('');
  const [instructorId, setInstructorId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    //${courseId}
    try {
      const response = await axios.put(`http://localhost:4000/admin/assignInstrctor`, {
        instructorId: instructorId,
      });
      setMessage('Instructor assigned successfully!');
    } catch (error) {
      setMessage('Error assigning instructor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor="courseId">Course ID:</label>
      <input
        id="courseId"
        type="text"
        name='courseId'
        value={courseId}
        onChange={(event) => setCourseId(event.target.value)}
      />
      <br />
      <label htmlFor="instructorId">Instructor ID:</label>
      <input
        id="instructorId"
        type="text"
        name='instructorId'
        value={instructorId}
        onChange={(event) => setInstructorId(event.target.value)}
      />
      <br />
      <button type="submit">Assign Instructor</button>
      <p>{message}</p>
    </form>
  );
}

export default AssignInstructorToCours