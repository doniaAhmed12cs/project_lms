import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderStudent() {
    return (
      <header className='header'>
        <nav>
          <ul>
            <li><Link to={"/Registered-courses"}>RegisteredCourses</Link></li>
            <li><Link to={"/Register-Courses"}>RegisterCourses</Link></li>
            <li><Link to={"/logout"}>logout</Link></li>
          
          </ul>
        </nav>
      </header>
    );
  }