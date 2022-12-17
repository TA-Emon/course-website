import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Course.css';

const Course = () => {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    return (
        <div className="course">
            <div className='container course-wrapper'>
                {
                    course.map(course => <SingleCourse key={course.id} course={course}></SingleCourse>)
                }
            </div>
        </div>

    );
};

export default Course;