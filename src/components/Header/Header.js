import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [navMobile, setNavMobile] = useState(false);

    const handelNav = () => {
        setNavMobile(!navMobile);
    }

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
                        <p className='logo'><Link className='logo-link' to='/'>UYL <span className='dot'>.</span></Link></p>
                        <nav className={navMobile ? 'nav-full' : 'nav-link'}>
                            <Link onClick={handelNav} className='link' to='/' >Home</Link>
                            <Link onClick={handelNav} className='link' to='/course' >Courses</Link>
                            <Link onClick={handelNav} className='link' to='/about' >About</Link>
                            <Link onClick={handelNav} className='link' to='/contact' >Contact</Link>
                            <Link onClick={handelNav} className='link' to='/dashboard' >Dashboard</Link>
                        </nav>
                        <div className="hamburger">
                            {navMobile ? <i onClick={handelNav} class="fa-sharp fa-solid fa-xmark icon-cross"></i> : <i onClick={handelNav} class="fa-sharp fa-solid fa-bars-staggered icon"></i>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;