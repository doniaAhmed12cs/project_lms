import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderAdmin() {
  return (
    <header className='header'>
      <nav>
        <ul>
         
          <li><Link to={"/Admin-Manage-Courses"}>AdminManageCourses</Link></li>
          <li><Link to={"/Admin-Manage-Instructors"}>AdminManageInstructors</Link></li>
          <li><Link to={"/Assign-Instructor-To-Cours"}>AssignInstructorToCours</Link></li>
          <li><Link to={"/Update-Delete-Courses"}>AdminUpDelCourses</Link></li>
          <li><Link to={"/Update-Delete-Instructors"}>AdminUpDelInstractor</Link></li>  
          <li><Link to={"/logout"}>logout</Link></li>
          
          
        </ul>
      </nav>
    </header>
  );
}