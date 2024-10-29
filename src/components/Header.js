import React from 'react';
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const[btnNameReact,setBtnNameReact]=useState("Login");
    return (
        <header className="header">
            <div className="logocontainer">
                <img 
                    className="logo" 
                    src={LOGO_URL} 
                    alt="Logo" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                       btnNameReact==="Login"?
                       setBtnNameReact("Logout"):
                       setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </header>
    );
};

export default Header