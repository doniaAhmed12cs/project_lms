import React, { useState ,useEffect} from "react";
import axios from "axios";
import "../Components/App.css";
const initialdata = [
  { id: 1, fName: 'Alice', lName:'David' ,course: 'Math' },
  { id: 2, fName: 'Bob', lName:'Fran',course: 'Science' },
  { id: 3, fName: 'Charlie',lName:'Ali' ,course: 'English' },
  { id: 4, fName: 'David',lName:'Eva', course: 'Math' },
  { id: 5, fName: 'Eve',lName:'Charl' ,course: 'Science' },
  { id: 6, fName: 'Frank',lName:'peo' ,course: 'English' },
];
const EnrolledStudents =()=> {
  
  const[data,setData] = useState(initialdata);
  const [id, setId] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [ course, setCourse] = useState('');
  


  useEffect(() => {
    axios.get('http://localhost:4000/instructor/enrolledStudents')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const rows = data.map(({ id, fName,lName, course }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{course}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>fName</th>
          <th>lName</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default EnrolledStudents;