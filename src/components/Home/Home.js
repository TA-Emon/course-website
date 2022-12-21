import React from 'react';
import { Link } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Home.css';

const Home = () => {
    const [course] = useCourse();
    return (
        <div>
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
            <div className="home-course-wrapper">
                <div className="course-wrapper container">
                    {
                        course.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Home;