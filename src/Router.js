import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import RegisteredCourses from  './Student/StuRegCrsG'
import RegisterCourses from  './Student/StuRegesterCrs'
import SetGradeForm from './Instractor/SetGrades';
import EnrolledStudents from './Instractor/ViewEnrolledStu';
import AdminManageCourses from './Admin/AdminManageCourses';
import AdminManageInstructors from './Admin/AdminManagesInstractors';
import AssignInstructorToCours from './Admin/AssignInstractorToCourses';
import AdminUpDelInstractor from './Admin/UpdateDeleteIn'
import AdminUpDelCourses from "./Admin/UpdateDeleteC";
import App from "./App";
import NotFound from "./NotFound";
import Logout from "./logout"
import RegistrationForm from "./RegistrationForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[

      {
        path: "",
        element: <Login />
      },
      {
        path: "/Registered-courses",
        element: <RegisteredCourses />
      },
      {
        path: "/Register-Courses",/** */
        element: <RegisterCourses />
      },
      {
        path: "/Set-Grade-Form",
        element: <SetGradeForm />
      },
      {
        path: "/Enrolled-Students",/** */
        element: <EnrolledStudents />
      },
    
      {
        path: "/Admin-Manage-Courses",/** */
        element: <AdminManageCourses />
    
      },
    
      {
        path: "/Admin-Manage-Instructors",/** */
        element: <AdminManageInstructors />
        
      },
      
      {
        path: "/Assign-Instructor-To-Cours",/** */
        element: <AssignInstructorToCours />
      },

      {
        path: "/Update-Delete-Courses",/** */
        element: <AdminUpDelCourses />
        
      }, {
        path: "/Update-Delete-Instructors",/** */
        element: <AdminUpDelInstractor />
        
      },
      {
        path: "/RegistrationForm",
        element: <RegistrationForm/>
      },

      {
        path: "/logout",
        element: <Logout/>
      },
     
    ],
  },

{

  path:"*",
  element:<NotFound/>,

},

  
  
]);
