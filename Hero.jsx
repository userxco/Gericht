import React, { useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { RiArrowRightSLine } from 'react-icons/ri';

const Sliderr  = () => {
    const slides = [
        {
          url: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/revslider/new-slider/BANNER.jpg',
          body: <div className='bg-black/50 flex flex-col justify-center items-center py-32 h-[100vh]
      leading-none text-white'>
          <h1 className='xl:text-[120px] lg:text-[100px]  md:text-[72px] text-[58px] font-x mb-4 w-[50%] md:w-auto text-center leading-[65px] md:leading-[74px] lg:leading-[110px]'>Quality served <br />Timely</h1>
          <p className='flex justify-center items-center font-fan md:w-[40%] text-center mb-4 lg:text-[25px] text-[23px]'>Learn more about our restaurant<RiArrowRightSLine className='text-[#dcca87]'/>bar
          </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center mb-2 font-cc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center font-cc'>sunt a incidunt eligendi quos quibusdam suscipit ipsum veritatis nesciunt aliquid!</p>
          <a href="plans" className='mt-8'>
            <button className='border border-y-[#dcca87] border-x-[#dcca87] px-10 
              py-4 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87] hover:border-x-black'>Explore More</button>
          </a>
      </div>,
        },
        {
          url: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/revslider/new-slider/BANNER3.jpg',
          body: <div className='bg-black/50 flex flex-col justify-center items-center py-32 h-[100vh]
      leading-none text-white'>
          <h1 className='lg:text-[100px]  md:text-[72px] text-[58px] font-x mb-4 w-[50%] md:w-auto text-center leading-[65px] md:leading-[74px] lg:leading-[110px]'>The Bounty Of <br />The Sea</h1>
          <p className='flex justify-center items-center font-fan md:w-[40%] text-center mb-4 lg:text-[25px] text-[23px]'>Learn more about our restaurant<RiArrowRightSLine className='text-[#dcca87]'/>bar
          </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center mb-2 font-cc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center font-cc'>sunt a incidunt eligendi quos quibusdam suscipit ipsum veritatis nesciunt aliquid!</p>
          <a href="plans" className='mt-8'>
            <button className='border border-y-[#dcca87] border-x-[#dcca87] px-10 
              py-4 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87] hover:border-x-black'>Explore More</button>
          </a>
      </div>,
        },
        {
          url : 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/revslider/new-slider/BANNER-2.jpg',
          body: <div className='bg-black/50 flex flex-col justify-center items-center py-32 h-[100vh]
      leading-none text-white'>
          <h1 className='lg:text-[100px]  md:text-[72px] text-[58px] font-x mb-4 w-[50%] md:w-auto text-center leading-[65px] md:leading-[74px] lg:leading-[110px]'>Taste The Better <br />At Gericht</h1>
          <p className='flex justify-center items-center font-fan md:w-[40%] text-center mb-4 lg:text-[25px] text-[23px]'>Learn more about our restaurant<RiArrowRightSLine className='text-[#dcca87]'/>bar
          </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center mb-2 font-cc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam </p>
          <p className='text-[#aaaaaa] w-[75%] md:w-auto text-center font-cc'>sunt a incidunt eligendi quos quibusdam suscipit ipsum veritatis nesciunt aliquid!</p>
          <a href="plans" className='mt-8'>
            <button className='border border-y-[#dcca87] border-x-[#dcca87] px-10 
              py-4 bg-[#dcca87] text-black font-fan hover:bg-black hover:text-[#dcca87] hover:border-x-black'>Explore More</button>
          </a>
      </div>,
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
{/* left slide */}
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };
  {/* right slide */}
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex);
  };
  {/* pass slides by the dots */}
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  {/* auto pass nextslide */}
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    console.log(' use effect')
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);
    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);
  return (
    <div className='w-full h-screen m-auto'>
        <p className='absolute w-full'>{slides[currentIndex].body}</p>
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
        
        {/* left arrow */}
        <div className='absolute  top-[50%] lg:top-[85%] lg:ml-96 lg:pl-4 -translate-x-0 translate-y-[-50%] left-5 text-2xl h-[90px] p-4 bg-black/30 hover:bg-[#dcca87] text-white cursor-pointer'>
          <SlArrowLeft onClick={prevSlide} size={30} className='mt-4'/>
        </div>
        {/* right arrow */}
        <div className=' absolute  lg:top-[85%] top-[50%] lg:mr-96 lg:pr-4 text-center -translate-x-0 translate-y-[-50%] right-5 text-2xl h-[90px] p-4 bg-black/30 hover:bg-[#dcca87] text-white cursor-pointer'>
          <SlArrowRight onClick={nextSlide} size={30} className='mt-4'/>
        </div>
       
    </div>
  )
}

export default Sliderr 