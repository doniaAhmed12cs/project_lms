import React from "react";
import "../src/Components/App.css";
import { useNavigate } from 'react-router-dom';

function Logout (){
    const navigate = useNavigate();

function handleLogout(){
    localStorage.clear();
    navigate('/');
}
return(
    <button onClick={handleLogout}>Logout</button>
);

}

export default Logout;
