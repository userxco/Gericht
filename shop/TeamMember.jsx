import React, { useEffect, useRef, useState } from 'react';
import a from '../assets/01-1.jpg';
import aa from '../assets/02.jpg';
import aaa from '../assets/03.jpg';
import aaaa from '../assets/04.jpg';
import aaaaa from '../assets/05.jpg';
import aaaaaa from '../assets/06.jpg';
import { LuSearch } from 'react-icons/lu';
import { LuCalendar } from 'react-icons/lu';
import z from '../assets/blog-a-150x150.jpg';
import x from '../assets/blog-c-150x150.jpg';
import c from '../assets/blog-d-150x150.jpg';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { LuSquareDot } from 'react-icons/lu';

const TeamMember = () => {
    const slides = [
        {
          url : 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2021/12/blog-c.jpg',
          body: <div>
            <div className='flex justify-between items-center my-4 text-[#aaaaaa] font-cc'>
                <h5>December 13, 2023</h5>
            <h5>- Joe muck.</h5>
            </div>
            <h4 className='text-white text-[20px] font-fan'>Make The Testy Eggplant Dish At Goricht</h4>
        </div>, 
          
        },
        {
          url: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2021/12/blog-d.jpg',
          body: <div>
            <div className='flex justify-between items-center my-4 text-[#aaaaaa] font-cc'>
                <h5>December 23, 2023</h5>
            <h5>- Saige Fuentes.</h5>
            </div>
            <h4 className='text-white text-[20px] font-fan'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        </div>,
        },
        {
          url: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2021/12/blog-a.jpg',
          body: <div>
            <div className='flex justify-between items-center my-4 text-[#aaaaaa] font-cc'>
                <h5>December 09, 2023</h5>
            <h5>- Bowen Higgins.</h5>
            </div>
            <h4 className='text-white text-[20px] font-fan'>temporibus. Dolorum reiciendis dolorem nostrum?</h4>
        </div>,
        },
        {
            url: 'https://wordpress.iqonic.design/product/wp/gericht/wp-content/uploads/2021/12/blog-b.jpg',
            body: <div>
            <div className='flex justify-between items-center my-4 text-[#aaaaaa] font-cc'>
                <h5>December 16, 2023</h5>
            <h5>- Kylan Gentry.</h5>
            </div>
            <h4 className='text-white text-[20px] font-fan'>alias maiores deleniti corrupti tempora quos.</h4>
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
        }, 2000);
        return () => clearTimeout(timerRef.current);
      }, [nextSlide]);
      
      const [navMobile, setNavMobile] = useState(true);
  return (
    <div className='bg-[#0c0c0c] py-[4rem] xl:px-[6rem] lg:px-4  text-white'>
        <div className='xl:container mx-auto'>
            <div className='lg:flex justify-between items-start'>
                {/* text */}
                <div className='flex flex-col justify-center items-center'>
                    {/* search */}
                    <div className=' bg-black w-[350px] md:w-[490px] p-10'>
                        <div className='flex justify-between items-center w-[270px] md:w-[390px] border-b border-white/20'>
                            <input type="text" placeholder='Search' className='bg-transparent mb-2'/>
                            <LuSearch className='text-[#dcca87]'/>
                        </div>
                    </div>
                     {/* catagories */}
                     <div className='bg-black w-[350px] md:w-[490px] p-10 my-4 md:my-12'>
                        <div className='flex flex-col justify-center items-start'>
                           <h4 className='text-[#dcca87] text-[25px] font-fan'>All Categories</h4>
                           <ul className='mt-4'>
                              <li className='border-b border-white/20 w-[270px] md:w-[390px] h-[39px] mb-4'><a href="" className='text-[#aaaaaa] mb-4 flex justify-between items-center hover:text-[#dcca87] font-cc'>Baking <span>(17)</span></a></li>
                              <li className='border-b border-white/20 w-[270px] md:w-[390px] h-[39px] mb-4'><a href="" className='text-[#aaaaaa] mb-4 flex justify-between items-center hover:text-[#dcca87] font-cc'>Cooking Tips <span>(17)</span></a></li>
                              <li className='border-b border-white/20 w-[270px] md:w-[390px] h-[39px] mb-4'><a href="" className='text-[#aaaaaa] mb-4 flex justify-between items-center hover:text-[#dcca87] font-cc'>Photography <span>(17)</span></a></li>
                            </ul> 
                        </div>
                     </div>
                      {/* tags */}
                    <div className='bg-black w-[350px] md:w-[490px] p-10'>
                        <div className='space-y-6'>
                            <h4 className='text-[#dcca87] text-[25px] font-fan'>Popular Tags</h4>
                            <div className='flex justify-start items-start space-x-2 md:space-x-4 pb-8'>
                               <div>
                                <button className='border border-white/20 px-4 py-3 bg-white/20 hover:bg-[#dcca87] hover:border-[#dcca87 hover:text-black transition-all font-cc'>Chef</button>
                            </div>
                            <div>
                                <button className='border border-white/20 px-4 py-3 bg-white/20 hover:bg-[#dcca87] hover:border-[#dcca87 hover:text-black transition-all font-cc'>Cooking</button>
                            </div>
                            <div>
                                <button className='border border-white/20 px-4 py-3 bg-white/20 hover:bg-[#dcca87] hover:border-[#dcca87 hover:text-black transition-all font-cc'>Grilling</button>
                            </div> 
                            </div>
                        </div>
                    </div>
                     {/* post */}
                     <div className='bg-black w-[350px] md:w-[490px] md:p-10 my-8 p-2 '>
                            <h4 className='text-[#dcca87] text-[25px] font-fan mb-6'>Amazing Post</h4>
                            <div className='flex justify-start items-start'>
                                {/* img */}
                                <div className='pr-6'>
                                    <img src={z} alt=""  className='rounded-md cursor-pointer'/>
                                </div>
                                {/* text */}
                                <div>
                                    <h6 className='text-[22px] font-fan hover:text-[#dcca87] cursor-pointer'>Mellow Pastry With Pistachios And Spicy Peanut</h6>
                                    <div className='flex justify-start items-center space-x-4 mt-2'>
                                        <LuCalendar className='text-[#dcca87]'/>
                                        <span className='text-[#aaaaaa] font-cc'>December 29, 2021</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start items-start py-8'>
                                {/* img */}
                                <div className='pr-6'>
                                    <img src={x} alt=""  className='rounded-md cursor-pointer'/>
                                </div>
                                {/* text */}
                                <div>
                                    <h6 className='text-[22px] font-fan hover:text-[#dcca87] cursor-pointer'>Mellow Pastry With Pistachios And Spicy Peanut</h6>
                                    <div className='flex justify-start items-center space-x-4 mt-2'>
                                        <LuCalendar className='text-[#dcca87]'/>
                                        <span className='text-[#aaaaaa] font-cc'>December 29, 2021</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start items-start'>
                                {/* img */}
                                <div className='pr-6'>
                                    <img src={c} alt=""  className='rounded-md cursor-pointer'/>
                                </div>
                                {/* text */}
                                <div>
                                    <h6 className='text-[22px] font-fan hover:text-[#dcca87] cursor-pointer'>Mellow Pastry With Pistachios And Spicy Peanut</h6>
                                    <div className='flex justify-start items-center space-x-4 mt-2'>
                                        <LuCalendar className='text-[#dcca87]'/>
                                        <span className='text-[#aaaaaa] font-cc'>December 29, 2021</span>
                                    </div>
                                </div>
                            </div>
                     </div>
                      {/* recent post slider */}
                    <div className='bg-black w-[350px] md:w-[490px] md:p-10 my-8 pb-44'>
                        <div>
                            <h4 className='text-[#dcca87] text-[25px] font-fan pl-4 md:pl-0'>Recent Post</h4>
                        </div>
                    {/* slider */}
                   <div className='max-w-[1400px] h-[400px] w-full m-auto py-12 px-4 relative group cursor-grab'>
                        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-cover duration-500'></div>
                        <div>{slides[currentIndex].body}</div>
                        {/* left arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                          <SlArrowLeft onClick={prevSlide} size={30}/>
                        </div>
                        {/* right arrow */}
                        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                          <SlArrowRight onClick={nextSlide} size={30}/>
                        </div>
                        {/* dots next slide */}
                        <div className='flex top-4 justify-center py-2'>
                          {slides.map((slide, slideIndex) => (
                              <div className='cursor-pointer text-[#dcca87] mt-4'>
                              <LuSquareDot 
                              key={slideIndex} 
                              onClick={() => goToSlide(slideIndex)} 
                              size={40}/>
                            </div>
                          ))}
                        </div>
                        </div>
                        </div>
                    </div>
                {/* text & images */}
                <div className='flex flex-col justify-end items-center gap-y-12 px-4 md:px-4 lg:px-0 lg:pr-8'>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="stacy"><img src={aaa} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="stacy" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Stacy Lee</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="stacy" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="luo"><img src={a} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="luo" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Kevin Luo</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="luo" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="choi"><img src={aa} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="choi" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Patrick Choi</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="choi" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="jack"><img src={aaaa} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="jack" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Jack Biscoff</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="jack" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="aren"><img src={aaaaa} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="aren" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Aren Goodman</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="aren" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                    <div className='flex flex-col justify-end items-start 2xl:ml-52 lg:ml-20 w-full border-b border-gray-600'>
                        <div className='xl:ml-12 2xl:ml-36 md:ml-12 lg:ml-2 px-4 pb-12'>
                            <a href="javier"><img src={aaaaaa} alt="" /> </a>
                        </div>
                        <div className=' flex justify-center items-center gap-x-4'>
                            <LuCalendar className='text-[#dcca87]'/>
                            <h4>September 17, 2023</h4>
                        </div>
                        <a href="javier" className='text-[72px] font-fan text-[#dcca87] hover:text-white'>Javier Dowsing</a>
                        <p className='font-cc'>Head Chef Kevin Luo Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit auctor sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis 
                            mauris eget sit. Nulla scelerisque scelerisque consectetur adipiscing 
                            elit. Graduated from Culinary Institute of New Jersey, USA. Worked as 
                            a junior chef at ruso’s Italiano. Contributed 20+ new recipes on 
                            International platform. Trained […]
                        </p>
                        <a href="javier" className='text-[#dcca87] font-cc py-14 hover:text-white'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeamMember