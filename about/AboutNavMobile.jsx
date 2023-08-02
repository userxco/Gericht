import React from 'react';
import { MdClose } from 'react-icons/md';
import logo from '../assets/logo (2).svg';
import { RiArrowRightSLine } from 'react-icons/ri';

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-[#0c0c0c] w-full h-full text-white'>
        <div className='border-b pb-8 pt-4 border-white/40'>
        <MdClose onClick={() => setNavMobile(false)} className='text-3xl absolute left-4 top-12 cursor-pointer'/>
          <img src={logo} alt="" className='pt-4 ml-20 w-[200px]'/>
        </div>
        <div className='pt-8 pl-8'>
          <ul className='flex flex-col items-start justify-start space-y-8 h-full uppercase'>
            <li className='border-b border-white/40 w-[280px] pb-4 hover:text-[#dcca87]'><a href="/" className='flex justify-between items-center'>Home <RiArrowRightSLine size={20}/></a></li>
            <li className='border-b border-white/40 w-[280px] pb-4 hover:text-[#dcca87]'><a href="about" className='flex justify-between items-center'>About <RiArrowRightSLine size={20}/></a></li>
            <li className='border-b border-white/40 w-[280px] pb-4 hover:text-[#dcca87]'><a href="plans" className='flex justify-between items-center'>Plans <RiArrowRightSLine size={20}/></a></li>
            <li className='border-b border-white/40 w-[280px] pb-4 hover:text-[#dcca87]'><a href="chefs" className='flex justify-between items-center'>Chefs <RiArrowRightSLine size={20}/></a></li>
            <li className='border-b border-white/40 w-[280px] pb-4 hover:text-[#dcca87]'><a href="shop" className='flex justify-between items-center'>Shop <RiArrowRightSLine size={20}/></a></li>
        </ul>
        </div>
        
    </nav>
  )
}

export default NavMobile