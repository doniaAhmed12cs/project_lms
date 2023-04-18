import React, { useState } from "react";




const initialdata = [
  { student: 'Alice', math: 85, science: 92, english: 78 },
  { student: 'Bob', math: 92, science: 88, english: 80 },
  { student: 'Charlie', math: 78, science: 85, english: 90 }
];


const SetGradeForm =() => {
 const[data,setData] = useState(initialdata);
  const [student, setStudent] = useState('');
  const [math, setMath] = useState('');
  const [science, setscience] = useState('');
  const [english, setEnglish] = useState('');
  const [status, setStatus] = useState('');

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



