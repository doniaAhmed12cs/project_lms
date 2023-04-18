
import { Outlet} from 'react-router-dom';
import Footer from './Footer'
import React, { useState } from 'react';
import HeaderStudent from './HeaderStudent';
import HeaderInstractor from './HeaderInstractor';
import HeaderAdmin from './HeaderAdmin';


function App() {
 /* const [userType, setUserType] = useState('student');

  if (userType === 'student') {
    return (
      <HeaderStudent />
    );
  } else if (userType === 'instructor') {
    return (
      <HeaderInstractor />
    );
  } else if (userType === 'admin') {
    return (
      <HeaderAdmin />
    );
  
  }

*/

  return (
    <div className="App">
     <div className="ell">
     <HeaderAdmin />
   {/* <HeaderStudent /> */}
   {/*  <HeaderInstractor /> */}
      <Outlet />
       <Footer /> 
     </div>
    </div>
  );
}

export default App;
