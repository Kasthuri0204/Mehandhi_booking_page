import React from 'react';
import Navbar from '../Navbar/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import './About.css';
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-page">
            <div className="about-content">
                <h1>About Us</h1>
                <p>Welcome to <strong>Shenba Mehendi Booking</strong>, where tradition meets creativity. Our talented team of artists specializes in crafting intricate, elegant, and customized Mehendi designs that bring beauty to every occasion. With a blend of experience and passion, we ensure every design is unique and memorable.
                <br /><br />
                <h3>Meet Our Artists:</h3>
                <PersonIcon /> <strong>Subi</strong> – Over 5 years of experience in modern and traditional Mehendi.<br />
                <PersonIcon /> <strong>Thana Lakshmi</strong> – Renowned for exquisite bridal Mehendi artistry.<br />
                <PersonIcon /> <strong>Chitra</strong> – Specialist in contemporary and 3D Mehendi designs.<br /></p>

            </div>
        </div>

        </div>
    );
};

export default About;