import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from '../images/pklogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Navbar">
            <div className="Nav">
                <div className="nav-logo">
                    <img src={logo} alt=""/>PK CHITS PVT LTD
                </div>
                <div className={`nav-items ${isOpen ? "open" : ""}`}>
                    <Link to="/Main">Home</Link>
                    <Link to="/Portfolio">Portfolio</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Aboutus">About us</Link>
                    <Link to="/Contact">Contact us</Link>
                </div>
                <div className={`nav-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
