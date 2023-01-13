import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard(props) {
    const {title, image, desc, alert} = props; // Destructuring the props elements
    return (
        <div className='flex flex-col w-[300px] p-3 rounded-md border-2 gap-3'>
            <h1 className='text-left font-semibold text-xl pt-2'>{title}</h1>
            <div>
                <img src={image} alt="web-d" className='rounded-sm'/>
            </div>
            <p className='text-left'>{desc}</p>
            <button onClick={alert} className='bg-blue-500 text-white px-4 py-2.5 rounded-md font-semibold text-sm mt-2'>
                <Link to="/courses">Join Now</Link>
            </button>
        </div>
    ); 
}

export default CourseCard;