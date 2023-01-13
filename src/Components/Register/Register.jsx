import React from 'react';
import Title from '../title/Title';
import { Link } from 'react-router-dom';
import image from '../../img/register.png';

function Register() {
    return (
        <div className='pt-20 '>
            <h1 className="text-8xl font-semibold text-gray-200 text-left">Register</h1>
            <Title text="Register" />

            <div className=' mx-24 pt-20 flex justify-center'>
                <div className='p-8 bg-gray-200 w-[45%] rounded-l-md'>
                    <div className='flex align-middle gap-2'>
                        <img src="https://www.iconpacks.net/icons/1/free-champion-icon-1370-thumb.png" className='h-8 w-auto' alt="" />
                        <p className='text-left text-xl font-medium'>Let’s join!</p> 
                    </div>
                   
                    <div className='flex flex-col gap-4 mt-6'>
                        <form action="" className='flex flex-col gap-4'>
                            <input type="text" placeholder="Name" className='text-sm h-10 rounded-md border-2 px-2 w-full' />
                            <input type="number" placeholder="Phone Number" className='text-sm h-10 rounded-md border-2 px-2 w-full' />
                            <input type="text" placeholder="Email" className='text-sm h-10 rounded-md border-2 px-2 w-full' />
                            {/* Check Box */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-left text-gray-500'>Gender</p>
                                <div className="flex gap-4">
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>Male</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>Female</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-left text-gray-500'>Qualification</p>
                                <div className="flex gap-4">
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>Student</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>Teacher</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-left text-gray-500'>Course</p>
                                <div className="flex gap-4">
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>Web Development</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" className='h-5 w-5' />
                                        <p className='text-sm'>App Development</p>
                                    </div>
                                </div>
                            </div>

                            {/* Country Dropdown */}
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-left text-gray-500'>Country</p>
                                <select name="" id="" className='h-10 rounded-md border-2 px-2 w-full text-sm'>
                                    <option value="">Choose Country</option>
                                    <option value="">Nepal</option>
                                    <option value="">India</option>
                                    <option value="">USA</option>
                                    <option value="">UK</option>
                                    <option value="">China</option>
                                </select>
                            </div>

                            <div className='flex gap-4'>
                                <input type="password" placeholder="Password" className='text-sm h-10 rounded-md border-2 px-2 w-full' />

                                <input type="password" placeholder="Confirm Password" className='text-sm h-10 rounded-md border-2 px-2 w-full' />

                            </div>
                            <button className='bg-blue-500 text-white px-4 py-2.5 rounded-md font-semibold text-sm mt-2 w-full'>Sign Up</button>
                        </form>
                        <p className='text-sm'>Already have an account?
                         <Link to="/login"><span className="text-blue-500"> Login</span></Link></p>
                    </div>
                
                </div>
                <div className='w-[55%] relative overflow-hidden rounded-r-md'>
                    <img src={image} alt="" className='w-full absolute -z-10'/>
                    <h1 className='absolute bottom-7 left-10 text-4xl z-10 text-left font-bold w-[55%] text-white'>Be a part of <span className='text-cyan-200'>Universe</span> of the <span className='text-yellow-300'>Aspiring</span> Developers!</h1>
                </div>
            </div>
        </div>
    );
}

export default Register;