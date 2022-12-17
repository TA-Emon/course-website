import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="container home-wrapper">
                <div className="home-left">
                    <p className="lets-started">Let's Started</p>
                    <h1 className='learning-skill'>Learning Skills & Upgrade Your Life</h1>
                    <Link className='home-btn' to='/course'>Our Courses</Link>
                </div>
                <div className="home-right">

                </div>
            </div>
        </div>
    );
};

export default Home;