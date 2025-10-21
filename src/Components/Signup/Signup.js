import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 

const Signup = () => {
    const navigate = useNavigate();

    const handleSignupSubmit = (event) => {
        event.preventDefault(); 

        
        navigate('/Home');
    };

    return (
        <div>
            <Navbar />
            <div className="user-signup-container">
                <h1 className="user-signup-heading">Signup</h1>
                <p className="signup-note">Create your account to book your Mehendi sessions with ease.</p>
                <form className="user-signup-form" onSubmit={handleSignupSubmit}>
                    <div className="user-signup-field">
                        <label htmlFor="name" className="user-signup-label">
                            <FontAwesomeIcon icon={faUser} className="user-signup-icon" /> Name:
                        </label>
                        <input type="text" id="name" name="name" required className="user-signup-input" />
                    </div>
                    <div className="user-signup-field">
                        <label htmlFor="email" className="user-signup-label">
                            <FontAwesomeIcon icon={faEnvelope} className="user-signup-icon" /> Email:
                        </label>
                        <input type="email" id="email" name="email" required className="user-signup-input" />
                    </div>
                    <div className="user-signup-field">
                        <label htmlFor="password" className="user-signup-label">
                            <FontAwesomeIcon icon={faLock} className="user-signup-icon" /> Password:
                        </label>
                        <input type="password" id="password" name="password" required className="user-signup-input" />
                    </div>
                    <button type="submit" className="user-signup-button">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;