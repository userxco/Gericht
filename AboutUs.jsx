import React from 'react';
import x from '../assets/2-1.png';
import z from '../assets/1-1.png';
import a from '../assets/spoon.svg';

const AboutUs = () => {
  return (
    <div className='bg-[#0c0c0c] text-white py-[4rem] xl:px-[6rem]'>
        <div className='container mx-auto'>
            <div className='lg:flex justify-center items-center'>
                {/* img */}
                <div className='w-full h-full flex justify-center items-center mb-12 p-4 md:p-0 lg:mb-0 lg:pr-32'>
                    <img src={z} alt="" className='border border-[#dcca87]'/>
                </div>
                {/* text */}
                <div className='w-full h-full md:pb-52 mb-8 px-4 lg:px-0'>
                    <div className='md:p-0'>
                        <img src={x} alt="" className='border border-[#dcca87]'/>
                    </div>
                    <h4 className='md:text-[48px] text-[23px] font-fan'>About Us</h4>
                    <div>
                        <img src={a} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87] md:leading-[65px] leading-[50px] mb-8'>Food, Drinks, Entertainment In One</h2>
                    <p className='font-cc text-[#aaaaaa]'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. 
                        Risus placerat morbi volutpat habitasse interdum mi aliquam In sed 
                        odio nec aliquet.
                    </p>
                    <div className='mt-6'>
                        <button className='border border-[#dcca87] px-10 
                        py-3 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87]'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs