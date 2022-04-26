
import React from "react";
import { Link } from "react-router-dom";

export const Nav=()=>{


    return <div>
        <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/listing/create">Create Entity</Link>{" "} &nbsp;&nbsp;
        <Link to="/register" >Register</Link>{" "} &nbsp;&nbsp;
        <Link to="/login" >Login</Link>
    </div>
}

