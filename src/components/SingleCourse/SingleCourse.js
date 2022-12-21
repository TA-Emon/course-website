import React from 'react';
import './SingleCourse.css';

const SingleCourse = (props) => {

    const {img, price, mentor, course} = props.course;
    return (
        <div className='course-item'>
            <img className='course-img' src={img} alt="" />
            <p className='course-name'>Course: {course}</p>
            <b className='mentor'>Mentor: {mentor}</b>
            <span className='price'>${price}</span>
        </div>
    );
};

export default SingleCourse;