import React, { useState} from "react";
import axios from "axios";
import "../Components/App.css";

const AdminManageInstructors = () => {

  return (
    <div>
      <h1 className="h2">Instructors</h1>
       <CourseForm />
    </div>
  );
};

const CourseForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {fName ,lName ,email ,password ,phone ,status};
    axios.post("http://localhost:4000/admin/addInstrctor", newCourse).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      First Name:
        <input
          type="text"
          name="fName"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lName"
          value={fName}
          onChange={(e) => setLName(e.target.value)}
        />
      </label>
      <label>
      Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
      Password:
        <input
          type="text"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      
      <label>
      Phone:
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <button>Add Instractor</button>
    </form>
  );
};

export default AdminManageInstructors;


