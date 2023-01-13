import React from "react";
import {BsSearch} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {SiDiscord} from "react-icons/si";
import Title from "./title/Title";
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <div className="pt-28">
        <div className="items-center flex flex-col gap-12">
            <button className="bg-gray-200 rounded-full px-4 py-1.5 text-xs">Check out our most recent podcast &nbsp; &#62;</button>

            <h1 className="text-5xl font-semibold">The Free Community for<br/>Modern Learning.</h1>
            <p className="w-1/2 mx-auto text-sm ">This is a community which provides free hands-on training in various fields ot computer science and have an inclusive community focusing on a learn by doing approach.</p>

            <div className="flex gap-8 text-sm">
                <button className="flex gap-3 items-center bg-blue-500 text-white px-4 py-2.5 rounded-sm"><BsSearch/>
                <Link to="/courses">See Courses</Link>
                </button>
                <button className="flex gap-3 items-center px-4 rounded-sm border border-gray-500"><BsYoutube/>Visit Youtube</button>
            </div>
        </div>
        <div className="pt-14 bg-white">
        <h1 className="text-8xl font-semibold text-gray-200 text-left">ABOUT US</h1>
        <Title text="About Us" />

        <div className="pt-16 flex px-36 gap-28 items-center w-full">
            <div className="w-1/2 ">
                <img src="https://sas-production-uploads.s3.eu-west-2.amazonaws.com/article_main_img/tool/large_181215993.jpeg" alt="about us" className="w-full rounded-md bg-cover"/>
            </div>
            <div className="w-1/2">
                <ul className="text-left list-disc flex flex-col text-sm">
                    <li className="w-full  ">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que Vltae sapiente blandlti's et ut, error eos facilis explcabo? Dvgntss•rnos, sunt ratione_ Eos, aliquam digruss•rnos?</li>
                    <br/>
                    <li className="w-full  ">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que Vltae sapiente blandlti's et ut, error</li>
                    <br/>
                    <li className="w-full  ">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que.</li>
                </ul>
                <button className="flex gap-3 items-center bg-blue-500 text-white px-4 py-2.5 rounded-sm font-semibold mt-10 text-sm"><SiDiscord/>Join Our Discord</button>
            </div>
        </div>

        <h1 className="text-8xl font-semibold text-left pt-20 text-gray-200">BOOST<br/>YOUR CAREER</h1>
        {/* <Title text="Boost your career with Hands On Courses" /> */}
        <h1 className="text-4xl font-semibold mt-[-120px] text-left mx-24">Boost your career with<br/>Hands On Courses</h1>

        <div className="pt-32 flex px-36 gap-28 items-center w-full">
            <div className="w-full">
                <ul className="text-left list-disc flex flex-col text-sm">
                    <li className="w-full ">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que Vltae sapiente blandlti's et ut, error eos facilis explcabo? Dvgntss•rnos, sunt ratione_ Eos, aliquam digruss•rnos?</li>
                    <br/>
                    <li className="w-full">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que Vltae sapiente blandlti's et ut, error</li>
                    <br/>
                    <li className="w-full">Lorem ipsum dolor. sit amet consectetur adipistcing elit Voluptatem simil'que.</li>
                </ul>
                <button className="flex gap-3 items-center bg-blue-500 text-white px-4 py-2.5 rounded-sm font-semibold mt-10 text-sm"><SiDiscord/>Join Our Discord</button>
            </div>
            <div className="w-full">
                <img src="https://cloud.fullstackacademy.com/WDF-cohort-students.jpg?mtime=20191205124058" alt="boost" className=" md:w-full rounded-md bg-cover"/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Hero;