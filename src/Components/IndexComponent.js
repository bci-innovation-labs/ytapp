import React, { Component } from "react";
import { Link } from "react-router-dom";


function IndexComponent(props) {
    return (
        <>
           <h1>Welcome to my YouTube playlist App</h1>
           <p>To begin, please login...</p>
           <p><Link to="/login">Login here</Link></p>
        </>
    );
}

export default IndexComponent
