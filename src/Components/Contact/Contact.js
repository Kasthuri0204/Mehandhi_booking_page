import React from 'react';
import Navbar from '../Navbar/Navbar';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='contact-page'>
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Reach out to us for bookings, inquiries, or collaborations.</p><br />
                <p><MailIcon /> Email: <strong>shenba@gmail.com</strong></p><br />
                <p><AddIcCallIcon /> Phone: <strong>+91 4271-8390</strong></p>
            </div>
            </div>
        </div>
    );
};

export default Contact;