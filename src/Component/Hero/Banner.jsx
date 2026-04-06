import React from 'react';
import banner from "../../assets/banner-main.png"
// import './App.css'
import bgshaow from "../../assets/bg-shadow.png"

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bgshaow})`}}
         className='bg-no-repeat bg-cover bg-center py-20'>
            
            <img className='h-[40vh] mx-auto my-0 bg-black' src={banner} alt="" />
            <div className='py-10 flex flex-col justify-center'>
                <h1 className='font-bold text-4xl text-gray-600 text-center items-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='font-normal text-sm text-gray-400 text-center items-center py-4'>Beyond Boundaries Beyond Limits</p>
                <a className='btn btn-outline items-center text-center w-sm mx-auto text-white text-xl bg-yellow-400' href='/' >Claim Free Credit</a>
            </div>
        </div>
        
    );
};

export default Banner;