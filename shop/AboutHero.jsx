import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri';

const AboutHero = () => {
  return (
    <div className='bg-banner bg-center bg-cover bg-repeat md:h-[450px]'>
        <div className='bg-black/40 h-[450px]'>
            <div className='container mx-auto'>
            <div className='flex justify-center items-center h-[450px]'>
                {/* text */}
                <div className='text-white'>
                    <h1 className='md:text-[72px] text-[48px] font-fan mb-4 leading-[40px] md:leading-normal text-center'>Shop</h1>
                    <div className='flex justify-center items-center'>
                        <a href="/" className='font-cc hover:text-[#dcca87] transition-all'>Home</a>
                        <RiArrowRightSLine className='text-[#dcca87]'/>
                    <p className='text-[#dcca87] font-cc'>SHOP</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default AboutHero