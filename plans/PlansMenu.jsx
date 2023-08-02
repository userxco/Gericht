import React from 'react';
import x from '../assets/spoon.svg';
import { MdHorizontalRule } from 'react-icons/md';

const PlansMenu = () => {
  return (
    <div className='bg-[#0c0c0c] md:py-[10rem] py-[6rem] lg:px-[6rem] px-[2rem] text-white text-center'>
        <div className='container mx-auto'>
            <div className='lg:flex md:grid grid-cols-2 justify-center items-center gap-x-8 space-y-8 lg:space-y-0'>
                {/* text */}
                <div className='flex flex-col justify-center items-center gap-y-4 border border-[#dcca87] py-8 pb-12 px-6'>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87]'>Breakfast</h2>
                    <div>
                        <img src={x} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h3 className='md:text-[48px] text-[36px] font-fan'>$199</h3>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Breakfast Burritos</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Mini Sesame Zucchini Loaves</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Spinach And Cheese Breakfast Pockets</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Tea & Coffee</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Fruit Platter</p>
                    <div className='mt-4'>
                        <button className='border px-9 py-2.5 bg-[#dcca87] text-black
                         border-[#dcca87] font-fan hover:bg-black
                          hover:text-[#dcca87] duration-500'>Know More</button>
                    </div>
                </div>
                {/* text */}
                <div className='flex flex-col justify-center items-center gap-y-4 border border-[#dcca87] py-8 pb-12 px-6'>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87]'>Lunch</h2>
                    <div>
                        <img src={x} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h3 className='md:text-[48px] text-[36px] font-fan'>$299</h3>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Breakfast Burritos</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Mini Sesame Zucchini Loaves</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Spinach And Cheese Breakfast Pockets</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Tea & Coffee</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Fruit Platter</p>
                    <div className='mt-4'>
                        <button className='border px-9 py-2.5 bg-[#dcca87] text-black
                         border-[#dcca87] font-fan hover:bg-black
                          hover:text-[#dcca87] duration-500'>Know More</button>
                    </div>
                </div>
                {/* text */}
                <div className='flex flex-col justify-center items-center md:w-[720px] lg:w-auto gap-y-4 border border-[#dcca87] py-8 pb-12 px-6'>
                    <h2 className='md:text-[72px] text-[48px] font-fan text-[#dcca87]'>Dinner</h2>
                    <div>
                        <img src={x} alt="" className='md:w-[55px] w-[45px]'/>
                    </div>
                    <h3 className='md:text-[48px] text-[36px] font-fan'>$399</h3>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Breakfast Burritos</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Mini Sesame Zucchini Loaves</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Spinach And Cheese Breakfast Pockets</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Tea & Coffee</p>
                    <p className='font-cc md:text-[20px] flex justify-center items-center gap-x-2'><MdHorizontalRule className='text-[#dcca87]'/>Fruit Platter</p>
                    <div className='mt-4'>
                        <button className='border px-9 py-2.5 bg-[#dcca87] text-black
                         border-[#dcca87] font-fan hover:bg-black
                          hover:text-[#dcca87] duration-500'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlansMenu