import React from 'react';
import { Link } from 'react-router-dom';
import "../src/Components/App.css";

export default function HeaderInstractor() {
    return (
      <header className='header'>
        <nav>
          <ul>
          
            <li><Link to={"/Set-Grade-Form"}>SetGradeForm</Link></li>
            <li><Link to={"/Enrolled-Students"}>EnrolledStudents</Link></li>
            <li><Link to={"/logout"}>logout</Link></li>
          
          </ul>
        </nav>
      </header>
    );
  }