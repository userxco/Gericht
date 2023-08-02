import React from 'react';
import x from '../assets/img-1.png';
import a from '../assets/spoon.svg';

const FindUs = () => {
  return (
    <div className='relative bg-about bg-cover bg-repeat bg-center bg-fixed lg:py-[4rem] lg:px-[6rem]'>
        <div className='container mx-auto lg:py-32 py-20'>
            <div className='lg:flex justify-center items-center'>
                {/* text */}
                <div className='text-white md:pr-44 mb-12 lg:mb-0 px-8 '>
                    <h4 className='md:text-[48px] text-[23px] font-fan'>Contact</h4>
                    <div>
                        <img src={a} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87]'>Find Us</h2>
                    <p className='text-[#aaaaaa]'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7S</p>
                    <h4 className='text-[23px] font-fan text-[#dcca87] my-2'>Opening Hours</h4>
                    <p className='mb-4 text-[#aaaaaa]'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='mb-8 text-[#aaaaaa]'>Sat – Sun: 10:00 am – 03:00 am</p>
                    <div>
                        <button className='border border-[#dcca87] px-10 
                        py-3 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87]'>Visit Us</button>
                    </div>
                </div>
                {/* img */}
                <div className='px-4 lg:px-0'>
                    <img src={x} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindUs