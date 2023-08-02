import React from 'react';
import x from '../assets/spoon.svg';
import a from '../assets/asset-10.jpeg';
import aa from '../assets/asset-8.jpeg';
import aaa from '../assets/asset-9.jpeg';

const Food = () => {
  return (
    <div className='bg-[#0c0c0c] text-white lg:py-[8rem] py-[4rem] lg:px-[6rem]'>
        <div className='container mx-auto'>
            <div className='p-4'>
                {/* text */}
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='md:text-[48px] text-[23px] font-fan'>Delicious Menu</h3>
                    <div>
                        <img src={x} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87] leading-[66px] md:leading-normal'>Taste The Royal Cuisine</h2>
                    <p className='md:text-[23px] text-cc text-center text-[#aaaaaa]'>There are many variations of passages of Lorem Ipsum available, but the 
                        majority have suffered alteration in some form, by injected humour, or 
                        randomised words which don’t look believable.
                    </p>
                </div>
                {/* img */}
                <div className=' mt-16'>
                    <div className='xl:flex grid md:grid-cols-2 justify-center items-center lg:gap-x-4'>
                        <a href="/">
                          <img src={a} alt="" className=''/>  
                        </a>
                        <a href="/">
                           <img src={aa} alt="" className='my-4 md:ml-8 xl:ml-0'/> 
                        </a>
                        <a href="/">
                            <img src={aaa} alt="" className='md:mt-8 xl:mt-0'/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Food