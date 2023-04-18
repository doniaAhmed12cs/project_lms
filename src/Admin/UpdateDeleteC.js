import React, { useState } from 'react';


const initialCourses = [
  { id: 1, name: 'Course 1', code: 'CSE101', status: 'Active' },
  { id: 2, name: 'Course 2', code: 'CSE202', status: 'Inactive' },
  { id: 3, name: 'Course 3', code: 'CSE303', status: 'Active' }
];

const  AdminUpDelCourses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('');


  const handleUpdate = (index) => {
    const course = courses[index];
    setId(course.id);
    setName(course.name);
    setCode(course.code);
    setStatus(course.status);
  };

  const handleDelete = (index) => {
    const newCourses = [...courses];
    newCourses.splice(index, 1);
    setCourses(newCourses);
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
              <td>
                <button onClick={() => handleUpdate(index)}>UpdateCourses</button>
                <button onClick={() => handleDelete(index)}>DeleteCourses</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default  AdminUpDelCourses;
