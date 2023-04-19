import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Components/App.css";
const initialInstructors = [
  { id: 1, name: 'John Doe', email: 'johndoe@university.edu', phone: '2374745' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@university.edu', phone: '5896795' },
  { id: 3, name: 'Bob Johnson', email: 'bobjohnson@university.edu', phone: '248967057' }
];

const AdminUpDelInstructors = () => {
  const [instructors, setInstructors] = useState(initialInstructors);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    axios.get('/api/instructors')
      .then(response => {
        setInstructors(response.data);
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
        <label>Email:</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>phone:</label>
        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <button onClick={(e) => handleSave(e)}>Save Instructor</button>
      </form>
    );
  };

  const handleUpdate = (index) => {
    const instructor = instructors[index];
    setId(instructor.id);
    setName(instructor.name);
    setEmail(instructor.email);
    setPhone(instructor.phone);
  };

  const handleDelete = (index) => {
    const newInstructors = [...instructors];
    newInstructors.splice(index, 1);
    setInstructors(newInstructors);
  };

  const renderInstructor = (instructor, index) => {
    return (
      <>
        <button onClick={() => handleUpdate(index)}>Edit Instructor</button>
        <button onClick={() => handleDelete(index)}>Delete Instructor</button>
      </>
    );
  };

  const renderEditForm = (instructor, index) => {
    return (
      <form>
        <label>ID:</label>
        <input type='text' value={id} disabled />
        <br />
        <label>Name:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>phone:</label>
        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <button onClick={(e) => handleSave(e)}>Save Changes</button>
        <button onClick={() => toggleState()}>Cancel</button>
      </form>
    );
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isEdit) {
      const index = instructors.findIndex(i => i.id === id);
      if (index !== -1) {
        const newInstructors = [...instructors];
        newInstructors[index] = { id, name, email, phone };
        setInstructors(newInstructors);
        setIsEdit(false);
      }
    } else {
      const newInstructor = { id: instructors.length + 1, name, email, phone };
      setInstructors([...instructors, newInstructor]);
    }
    setId('');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor, index) => (
            <tr key={instructor.id}>
              <td>{instructor.id}</td>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>{instructor.phone}</td>
              <td>
                {isEdit ? renderEditForm(instructor, index) : renderInstructor(instructor, index)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEdit ? null : renderUpdateForm()}
    </div>
  );
};

export default AdminUpDelInstructors;

