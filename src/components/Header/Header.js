import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="top-info">
            <div className="top-bar">
                <div className="container info-wrapper">
                    <div className="left-info">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="right-info">
                        <p>Hotline: 256 214 203 215</p>
                        <p>Email Us: info@uyl.com</p>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className="header-wrapper container">
                    <div className="header-items">
                        <p className='logo'><Link className='logo-link' to='/'>UYL .</Link></p>
                        <nav className='nav-link'>
                            <Link className='link' to='/' >Home</Link>
                            <Link className='link' to='/course' >Courses</Link>
                            <Link className='link' to='/about' >About</Link>
                            <Link className='link' to='/contact' >Contact</Link>
                            <Link className='link' to='/dashboard' >Dashboard</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;