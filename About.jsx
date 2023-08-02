import React from 'react';
import x from '../assets/spoon.svg';
import a from '../assets/wine.png';
import aa from '../assets/beer.png';
import aaa from '../assets/cocktails.png';


const About = () => {
  return (
    <div className='relative bg-[#0c0c0c] bg-center -z-10 bg-cover bg-fixed xl:h-[1350px] h-full text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center md:pt-44 py-20 pb-32 xl:pb-0 '>
                {/* text */}
                <div className='flex flex-col justify-center items-center mb-20'>
                    <h4 className='md:text-[48px] text-[23px] font-fan'>Wide Range To Choose From</h4>
                    <div>
                        <img src={x} alt="" className='md:w-[65px] w-[45px]'/>
                    </div>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87]'>What’s Your Poison?</h2>
                </div>
                {/* img */}
                <div className='md:grid grid-cols-2 xl:grid-cols-3 md:pr-20 md:w-full w-[75%]  md:ml-32 lg:ml-20 md:gap-x-12'>
                    <a href="/">
                        <img src={a} alt="" className='border border-[#dcca87] hover:scale-105 duration-300 mb-12 xl:mb-0'/>
                    </a>
                    <a href="/">
                        <img src={aa} alt="" className='border border-[#dcca87] hover:scale-105 duration-300 my-8'/>
                    </a>
                    <a href="/">
                        <img src={aaa} alt="" className='border border-[#dcca87] hover:scale-105 duration-300'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About