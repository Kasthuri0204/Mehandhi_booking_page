import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css'; 


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </Router>
    );
};

export default App;