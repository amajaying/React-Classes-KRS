import React from 'react';
import Title from '../title/Title';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';


const courseList = [
    {
        title: "Web Development",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "App Development",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "Machine Learning",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "IOT Development",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit ametQuisquam, quod.",
    },
    {
        title: "Cyber Security",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        title: "Data Science",
        image: "https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg",
        desc: "Lorem ipsum dolor sit amet contur, adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },

]

function Courses() {
    return (
        <div className='pt-20'>
            <div>
            <h1 className="text-8xl font-semibold text-left text-gray-200">COURSES</h1>
            <Title text="Courses" />
            </div>
            <div className='mx-24 grid grid-cols-3 justify-items-center mt-20 gap-10'>

                {courseList.map((courseList) => {
                    const fun = ()=> {
                        alert("You've joined " + courseList.title + " course!");
                    }
                    return(
                        <CourseCard title = {courseList.title} desc={courseList.desc} image = {courseList.image} alert = {fun}/>
                    )
                },)}          
            </div>
        </div>

    );
}

export default Courses;