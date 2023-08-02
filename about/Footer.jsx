import React from 'react';
import logo from '../assets/Gerícht (1).png';

const Footer = () => {
  return (
    <div className='relative bg-x bg-center bg-cover bg-repeat text-white py-[6rem] xl:px-[6rem]'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center pb-12 px-12'>
                <img src={logo} alt="" className='lg:w-[20%]'/>
            </div>
            <div className='lg:flex justify-center items-center xl:gap-x-32 gap-x-12 text-center'>
                {/* text */}
                <div className='mt-10 flex flex-col justify-center items-center'>
                    <h3 className='text-[36px] font-fan text-[#dcca87]'>Contact Us</h3>
                    <h4 className='text-[24px] font-fan my-2'>Booking Request</h4>
                    <p className='text-[#aaaaaa] font-cc'>call us: +122-356-8569</p>
                    <h3 className='text-[24px] font-fan my-2'>location</h3>
                    <p className='text-[#aaaaaa] font-cc'>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>
                {/* text */}
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-[36px] font-fan text-[#dcca87] mb-2'>Stay Connected</h3>
                    <p className='text-[#aaaaaa] font-cc px-2 md:px-0'>Subscribe & get 10% discount. Get E-mail updates about 
                    </p>
                    <p className='text-[#aaaaaa] font-cc'>our latest shop and 
                        special offers.</p>
                    <div className='border mt-4'>
                        <input type="emil" name='email' placeholder='Your email address' className='bg-transparent 2xl:w-[250px] xl:w-[150px] py-5 px-1 xl:px-6'/><button className='mr-2 border border-y-[#dcca87] border-x-[#dcca87] px-10 
                        py-3 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87] hover:border-x-black'>Subscribe</button>
                    </div>
                </div>
                {/* text */}
                <div>
                    <h3 className='text-[36px] font-fan text-[#dcca87] mb-4'>Opening Time</h3>
                    <div className='flex justify-center items-center gap-x-6'>
                        <div>
                            <h4 className='text-[24px] font-fan'>Lunch Time</h4>
                            <p className='text-[#aaaaaa] font-cc'>Monday-Friday</p>
                            <p className='text-[#dcca87] font-cc'>08:00 am -12:00 am</p>
                        </div>
                        <div className='hidden md:flex h-[44px] w-[1px] bg-white/60 mt-4'/>
                        <div>
                            <h4 className='text-[24px] font-fan'>Dinner Time</h4>
                            <p className='text-[#aaaaaa] font-cc'>Saturday-Sunday:</p>
                            <p className='text-[#dcca87] font-cc'>07:00am -11:00 pm</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer