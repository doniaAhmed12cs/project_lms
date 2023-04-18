import React, { useState } from 'react';


const initialInstractors = [
    { id: 1, fName: 'Mohmed', lName: 'Tamer',email:'sfh@gamail.com',password:'898',phone: '2336576',status: 'Active' },
    { id: 2, fName: 'Ahmed', lName: 'yosef',email:'nmjn@gamil.com',password:'456',phone:'780956', status: 'Inactive' },
    { id: 3, fName: 'Ali', lName: 'mina',email:'hnkt@gamail.com',password:'098',phone:'14456678', status: 'Active' }
  ];

function AdminUpDelInstractor() {
    const [instructors, setInstractors] = useState(initialInstractors);
    const [fName,  setFName] = useState('');
    const [lName,  setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone,  setPhone] = useState('');
    const [status, setStatus] = useState('');
  

    const handleUpdate = (index) => {
        const instractors = instractors[index];
        setFName(instructors.fName);
        setLName(instructors.lName);
        setEmail(instructors.email);
        setPassword(instructors.password);
        setPhone(instructors.phone);
        setStatus(instructors.status);
      };
     


      const handleDelete = (index) => {
        const newInstractors = [...newInstractors];
        newInstractors.splice(index, 1);
        setInstractors(newInstractors);
      };

 

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {instructors.map((instructor) => (
            <tr>
                <td>{instructor.id}</td>
                <td>{instructor.fName}</td>
                <td>{instructor.lName}</td>
                <td>{instructor.email}</td>
                <td>{instructor.password}</td>
                <td>{instructor.phone}</td>
                <td>{instructor.status}</td>
                <td>
                  <button onClick={() => handleUpdate(instructor)}>Update Instractor</button>
                  <button onClick={() => handleDelete(instructor)}>Delete Instractor</button>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminUpDelInstractor;

