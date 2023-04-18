import React, { useState} from 'react';


const initialdata = [
  { code: 3456, course: 'Math', grade: 92 },

  { code: 6882, course: 'Science', grade: 90 },

  { code: 6987, course: 'English', grade: 90 },


];

const RegisteredCourses =() => {
  const[data,setData] = useState(initialdata);
  const [code, setCode] = useState('');
  const [ course, setCourse] = useState('');
  const [ grade, setGrade] = useState('');

  const rows = data.map(({ code, course, grade }) => 
      <tr>
         <td>{code}</td>
        <td>{course}</td>
        <td>{grade}</td>
  
      </tr>
    );
  
  return (
    <table>
      <thead>
        <tr>
          <th>code</th>
          <th>course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
  }

export default RegisteredCourses;