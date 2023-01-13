import React from 'react';
import Title from '../title/Title';
import { Link } from 'react-router-dom';
import image from '../../img/login.png';

function Login() {
    return (
        <div className='pt-20 '>
            <h1 className="text-8xl font-semibold text-gray-200 text-left">LOGIN</h1>
            <Title text="Login" />

            <div className=' mx-24 pt-20 flex justify-center'>
                <div className='p-8 bg-gray-200 w-[45%] rounded-l-md'>
                    <div className='flex'>
                        <img src="https://www.iconpacks.net/icons/1/free-champion-icon-1370-thumb.png" className='h-14 w-auto' alt="" />
                        <p className='text-left text-lg font-medium'>Let’s learn and build<br/>something great!</p> 
                    </div>
                   
                    <div className='flex flex-col gap-4 mt-10'>
                        <form action="" className='flex flex-col gap-4'>
                            <input type="text" placeholder="Email or phone number" className='text-sm h-10 rounded-md border-2 px-2 w-full' />
                            <input type="password" placeholder="Password" className='text-sm w-full h-10 rounded-md border-2 px-2' />
                            <button className='bg-blue-500 text-white px-4 py-2.5 rounded-md font-semibold text-sm mt-2 w-full'>Login</button>
                        </form>
                        <a href="" className='text-blue-500 text-sm text-right'>Forgot password?</a>
                        <p className='text-sm'>Don't have an account?
                         <Link to="/register"><span className="text-blue-500"> Register</span></Link></p>
                    </div>
                
                </div>
                <div className='w-[55%] relative overflow-hidden rounded-r-md'>
                    <img src={image} alt="" className='w-full absolute -z-10'/>
                    <h1 className='absolute bottom-7 left-10 text-3xl z-10 text-left font-bold w-[80%] text-white'>Login to the <span className='text-cyan-200'>Universe</span> of the <span className='text-yellow-300'>Aspiring</span> Developers!</h1>
                </div>
            </div>
        </div>
    );
}

export default Login;