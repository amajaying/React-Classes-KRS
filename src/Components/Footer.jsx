import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <div className="pt-40 pb-20" id="contact">
            <hr className="w-[90%] h-0.5 mx-auto bg-blue-500"/>
        <div className="flex justify-between px-24 pt-8 w-full">
            
            <div className="flex items-center gap-6">
                <div>
                    <img src="https://krs.kiit.ac.in/assets/KRS.b5e08628.png" alt="krs-logo" className="h-24"/>
                </div>
                <div>
                    <p className="text-3xl font-bold text-left">KIIT<br/>ROBOTICS<br/>SOCIETY</p>
                </div>
            </div>
            <div className="flex gap-20">
                <div className="text-left">
                    <p className="text-md font-bold">Sitemap</p>
                    <Link to="/" className="text-sm">Home</Link>
                    <br/>
                    <Link to="/" className="text-sm">About Us</Link>
                    <br/>
                    <Link to="/" className="text-sm">Contact Us</Link>
                </div>

                
                <div className="text-left">
                    <p className="text-md font-bold">Contact Us</p>
                    <a href="/" className="text-sm">Email</a>
                    <br/>
                    <a href="/" className="text-sm">Instagram</a>
                    <br/>
                    <a href="/" className="text-sm">Youtube</a>
                    <br/>
                    <a href="/" className="text-sm">Facebook</a>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;