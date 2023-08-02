import React, {useState} from 'react';
import x from '../assets/2-0.png';
import a from '../assets/1-0.png';
import z from '../assets/spoon.svg';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const History = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <div className='bg-[#0c0c0c] text-white py-[8rem] lg:px-[6rem]'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h4 className='font-fan md:text-[48px] text-[23px]'>Our History</h4>
                <div>
                    <img src={z} alt="" className='md:w-[55px] w-[45px]'/>
                </div>
                <h2 className='text-[#dcca87] font-fan md:text-[72px] text-[48px] leading-[48px] md:leading-[72px]'>Serving Customers For Over A Decade</h2>
            </div>
            <div className='lg:flex justify-center items-center gap-x-12'>
                {/* text & img */}
                <div className='flex flex-col justify-center items-center w-full mt-12 text-center'>
                    <p className='xl:w-[80%] mb-12 px-4 md:px-0 font-cc text-[#aaaaaa]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis 
                        pharetra adipiscing ultrices vulputate posuere tristique. In sed 
                        odio nec aliquet eu proin mauris et.
                    </p>
                    <div className='p-4 lg:p-0'>
                        <img src={x} alt="" />
                    </div>
                </div>
                {/* img */} 
                <div className='w-full lg:pb-32 p-4 lg:p-0 md:pl-20 mt-20'>
                    <div className='w-full'>
                        <img src={a} alt="" />
                    </div>
                    {/* counter */}
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div>
                            <h2 className='text-[48px] font-fan text-[#dcca87] pt-12'>Over The Years</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <h1 className='text-[48px]  font-fan text-[#dcca87]'>
                                   {counterOn && <CountUp start={0} end={53} duration={2} delay={0}/>}
                                   + 
                                </h1>
                                <div>
                                    <img src={z} alt="" className='md:w-[55px] w-[45px] py-4'/>
                                </div>
                                <h3 className='text-[32px] font-fan md:pr-4'>Breakfast Options</h3>
                            </div>
                            <div className='w-[4px] text-white'/>
                            <div className=''>
                                <h1 className='text-[48px] font-fan text-[#dcca87]'>
                                   {counterOn && <CountUp start={0} end={90} duration={2} delay={0}/>}
                                   + 
                                </h1>
                                <div>
                                    <img src={z} alt="" className='md:w-[55px] w-[45px] py-4'/>
                                </div>
                                <h3 className='text-[32px] font-fan '>Breakfast Options</h3>
                            </div>
                            <div className=''>
                                <h1 className='text-[48px] font-fan text-[#dcca87]'>
                                   {counterOn && <CountUp start={0} end={85} duration={2} delay={0}/>}
                                   + 
                                </h1>
                                <div>
                                    <img src={z} alt="" className='md:w-[55px] w-[45px] py-4'/>
                                </div>
                                <h3 className='text-[32px] font-fan px-8'>Breakfast Options</h3>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    </div>
  )
}

export default History