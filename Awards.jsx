import React from 'react';
import x from '../assets/spoon.svg';
import ll from '../assets/laurels.png';
import a from '../assets/award01.png';
import aa from '../assets/award02.png';
import aaa from '../assets/award03.png';
import aaaa from '../assets/award05.png';


const Awards = () => {
  return (
    <div className='relative bg-about bg-center bg-cover bg-repeat bg-fixed flex justify-center items-center lg:py-[4rem] lg:px-[6rem] px-4 text-white'>
        <div className='container mx-auto xl:py-20 md:py-12 py-20'>
            <div className='xl:flex px-8 md:px-0'>
                {/* text */}
                <div className='mr-12 xl:mr-0 w-full flex flex-col justify-center items-start mb-16 xl:mb-0'>
                    <h4 className='text-[38px] font-fan text-[#dcca87]'>Deputy Chef</h4>
                    <div>
                        <img src={x} alt="" className='xl:w-[70px] w-[45px]'/>
                    </div>
                    <h2 className='text-[62px] font-fan xl:mb-8'>Our Laurels</h2>
                    <div className='md:grid grid-cols-2 xl:pr-44'>
                        {/* img */}
                        <div className='flex justify-center items-center gap-x-8 mr-4 mt-20 xl:mt-0'>
                            <div>
                               <img src={a} alt="" /> 
                            </div>
                            <div>
                            <h4 className='text-[23px] font-fan text-[#dcca87] mb-2'>Bib Gourmond</h4>
                            <p className='font-cc'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        {/* text */}
                        <div className='flex justify-center items-center gap-x-8 mt-20 2xl:mt-0'>
                            <div>
                               <img src={aa} alt="" /> 
                            </div>
                            <div>
                            <h4 className='text-[23px] font-fan text-[#dcca87] mb-2'>Rising Star</h4>
                            <p className='font-cc'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        {/* img */}
                        <div className='flex justify-center items-center gap-x-8 mt-20 mr-4'>
                            <div>
                               <img src={aaa} alt="" /> 
                            </div>
                            <div>
                            <h4 className='text-[23px] font-fan text-[#dcca87] mb-2'>AA Hospitality</h4>
                            <p className='font-cc'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        {/* text */}
                        <div className='flex justify-center items-center gap-x-8 mt-20 mb-20 md:mb-0'>
                            <div>
                               <img src={aaaa} alt="" /> 
                            </div>
                            <div>
                            <h4 className='text-[23px] font-fan text-[#dcca87] mb-2'>Outstanding Chef</h4>
                            <p className='font-cc'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* img */}
                <div className='flex justify-center items-center xl:w-[60%] md:w-[70%]'>
                    <img src={ll} alt="" className='w-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards