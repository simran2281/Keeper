import React from "react";
import logo from "./Images/logo1.jpg";
import './index.css';

const Header = () => {
    return <>
        <div className="header">
        <img src={logo} alt="logo" width='70' height='50'/>
        <h1> Note Keeper</h1>
            
        </div>
    </>;
};

export default Header;