import React from 'react';
import bgshadow from "../../assets/bg-shadow.png"

const NewsLetter = () => {
    return (
        <div className='relative mt-10'> 
            <div className='bg-white w-10/12 mx-auto z-20 absolute left-1/2 -translate-x-1/2 -top-24 rounded-xl shadow-lg'>
                <div style={{backgroundImage: `url(${bgshadow})`}}
                 className='bg-no-repeat bg-cover bg-center py-20'>
                    <div className='text-center'>
                        <h1 className='font-bold text-black text-xl md:text-3xl '>Subscribe to our Newsletter</h1>
                        <p className='font-normal text-gray-600 text-xs md:text-base my-3'>Get the latest updates and news right in your inbox!</p>
                        <div>
                            <input type="text" placeholder="username@site.com" className="input input-bordered border-gray-300 bg-white text-black"/>
                            <button style={{backgroundImage: `url(${bgshadow})`}} className="btn bg-no-repeat bg-cover bg-center bg-orange-300  text-black ">Subscribe</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default NewsLetter;