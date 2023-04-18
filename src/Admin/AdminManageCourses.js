import React, { useState} from "react";
import axios from "axios";
import "../Components/App.css";


const AdminManageCourses = () => {

  return (
    <div className="admin-manage-courses">
      <h1 className="h1">Courses</h1>
       <CourseForm />
    </div>
  );
};

const CourseForm = () => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { code, name, status };
    axios.post("/api/courses", newCourse).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Code:
        <input
          type="text"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="fName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <button>Add Course</button>
    </form>
  );
};

export default AdminManageCourses;
