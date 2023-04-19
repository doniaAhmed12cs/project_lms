import React, { useState,useEffect } from "react";
import axios from "axios";
import "../Components/App.css";


const initialdata = [
  { student: 'Alice', math: 85, science: 92, english: 78 },
  { student: 'Bob', math: 92, science: 88, english: 80 },
  { student: 'Charlie', math: 78, science: 85, english: 90 }
];


const SetGradeForm =() => {
  const [student, setStudent] = useState('');
  const [math, setMath] = useState('');
  const [science, setscience] = useState('');
  const [english, setEnglish] = useState('');
  const [status, setStatus] = useState('');
  const[data,setData] = useState(initialdata);
  
  useEffect(() => {
    axios.get('http://localhost:4000/instructor/setGrade')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const rows = data.map(({ student, math, science, english }) => (
    <tr key={student}>
      <td>{student}</td>
      <td>{math}</td>
      <td>{science}</td>
      <td>{english}</td>
    </tr>
  ));


  return (
    <table>
      <thead>
        <tr>
          <th>Student</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
export default SetGradeForm;



