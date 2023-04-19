import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Components/App.css";
const initialCourses = [
  { id: 1, name: 'Course 1', code: 'CSE101', status: 'Active' },
  { id: 2, name: 'Course 2', code: 'CSE202', status: 'Inactive' },
  { id: 3, name: 'Course 3', code: 'CSE303', status: 'Active' }
];

const AdminUpDelCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    axios.get('/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const toggleState = () => {
    setIsEdit(!isEdit);
  };

  const renderUpdateForm = () => {
    return (
      <form>
        <label>ID:</label>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Code:</label>
        <input type='text' value={code} onChange={(e) => setCode(e.target.value)} />
        <br />
        <label>Status:</label>
        <input type='text' value={status} onChange={(e) => setStatus(e.target.value)} />
        <br />
        <button onClick={(e) => handleSave(e)}>Save Course</button>
      </form>
    );
  };

  const handleUpdate = (index) => {
    const course = courses[index];
    setId(course.id);
    setName(course.name);
    setCode(course.code);
    setStatus(course.status);
    setIsEdit(true);
  };

  const handleDelete = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const renderCourse = (course, index) => {
    return (
      <>
        {isEdit ? (
          renderEditForm(course, index)
        ) : (
          <>
            <button onClick={() => handleUpdate(index)}>Edit Course</button>
            <button onClick={() => handleDelete(index)}>Delete Course</button>
          </>
        )}
      </>
    );
  };

  const renderEditForm = (course, index) => {
    return (
      <form>
        <label>ID:</label>
        <input type='text' value={id} disabled />
        <br />
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Code:</label>
        <input type='text' value={code} onChange={(e) => setCode(e.target.value)} />
        <br />
        <label>Status:</label>
        <input type='text' value={status} onChange={(e) => setStatus(e.target.value)} />
        <br />
        <button onClick={(e) => handleSave(e)}>Save Changes</button>
        <button onClick={() => toggleState()}>Cancel</button>
      </form>
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEdit) {
      const index = courses.findIndex(c => c.id === id);
      if (index !== -1) {
        const newCourses = [...courses];
        newCourses[index] = { id, name, code, status };
        setCourses(newCourses);
        setIsEdit(false);
      }
    } else {
      const newCourse = { id: courses.length + 1, name, code, status };
      setCourses([...courses, newCourse]);
    }
    setId('');
    setName('');
    setCode('');
    setStatus('');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.status}</td>
              <td>{renderCourse(course, index)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!isEdit && renderUpdateForm()}
    </div>
  );
};

export default AdminUpDelCourses;

