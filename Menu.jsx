import React from 'react';
import x from '../assets/spoon.svg';

const Menu = () => {
  return (
    <div className='relative bg-menu bg-center bg-cover bg-repeat bg-fixed'>
        <div className='container md:max-w-[2100px] mx-auto bg-black/60 py-32'>
            <div className=''>
                {/* text */}
                <div className='flex flex-col justify-center items-center p-4 lg:p-0 text-white'>
                    <h3 className='md:text-[48px] text-[23px] font-fan'>Menu That Fits You Palette</h3>
                    <div>
                        <img src={x} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87] 
                    leading-[49px] md:leading-none text-center mb-4'>All what you need to know about our food</h2>
                    <p className='md:text-[23px] text-[#aaaaaa] font-cc text-center xl:w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi molestiae 
                        autem reprehenderit fugiat nisi adipisci distinctio ab doloremque 
                        impedit commodi.
                    </p>
                    <div className='mt-12'>
                        <button className='border border-[#dcca87] px-10 
                        py-3 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu