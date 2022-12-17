import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer-container">
                <div className="footer-wrapper">
                    <div className="email">
                        <h2>Stay connected with us</h2>
                        <div className="subscribe">
                            <input type="text" placeholder='email' />
                            <button className='sub-btn'>Subscribe</button>
                        </div>
                        <div className="social-link">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="footer-info">
                        <h2 className='map'>Site Map</h2>
                        <div className="site-map">
                            <Link className='footer-link' to='/' >Home</Link>
                            <Link className='footer-link' to='/course' >Courses</Link>
                            <Link className='footer-link' to='/about' >About</Link>
                            <Link className='footer-link' to='/contact' >Contact</Link>
                            <Link className='footer-link' to='/dashboard' >Dashboard</Link>
                        </div>
                    </div>
                    <div className="about">
                        <h2>About us</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quaerat quia sunt odio doloremque consectetur quo fuga commodi expedita nihil.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;