import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Login.css'; 

const Login = () => {
    const navigate = useNavigate();

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(String(email).toLowerCase());
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        let valid = true;

        
        setEmailError('');
        setPasswordError('');

        
        if (!email) {
            setEmailError('Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }

        
        if (!password) {
            setPasswordError('Password is required.');
            valid = false;
        }

        
        if (valid) {
           
            console.log('Login successful!');
            navigate('/Home'); 
        }
    };

    return (
        <div>
            <Navbar />
            <div className="user-login-content"> 
                <h1 className="user-login-heading">Login</h1> 
                <form className="user-login-form" onSubmit={handleLoginSubmit}>
                    <div className="user-login-field">
                        <label htmlFor="email" className="user-login-label">Email:</label> 
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className={`user-login-input ${emailError ? 'error-input' : ''}`} 
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>
                    <div className="user-login-field"> 
                        <label htmlFor="password" className="user-login-label">Password:</label> 
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className={`user-login-input ${passwordError ? 'error-input' : ''}`} 
                        /> 
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>

                    <button type="submit" className="user-login-button">Login</button> 

                    <p className="login-note"  >Securely access your Shenba Mehendi Booking account.</p>
                </form>
            </div>
        </div>
    );
};

export default Login;
