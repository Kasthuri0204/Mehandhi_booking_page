import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Login</Link>
                </li>
                
                <li className="nav-item">
                
                 <Link to="/Home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;