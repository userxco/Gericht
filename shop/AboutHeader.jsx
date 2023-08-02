import React from 'react';
import logo from '../assets/logo (2).svg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { LuSearch } from 'react-icons/lu';
import { RiArrowDownSLine } from 'react-icons/ri';

const Header = ({ setNavMobile }) => {
  return (
    <header className='py-6 w-full absolute text-white border-b border-white/40 pb-8'>
      <div className='md:px-4'>
        <div className='flex items-center justify-between w-full'>
          {/* logo */}
          <a href="" className='ml-2 md:ml-0'>
            <img src={logo} alt="" className='md:h-[40px] h-[35px]'/>
          </a>
          {/* nav */}
          <div className='hidden lg:flex'>
        <ul className='flex items-center space-x-12'>
            <li className='hover:text-[#dcca87]'><a href="/" className='text-[16px] uppercase flex justify-center items-center gap-x-2'>Home <RiArrowDownSLine size={20}/></a></li>
            <li className='hover:text-[#dcca87]'><a href="about" className='text-[16px] uppercase flex justify-center items-center gap-x-2'>About <RiArrowDownSLine size={20}/></a></li>
            <li className='hover:text-[#dcca87]'><a href="plans" className='text-[16px] uppercase flex justify-center items-center gap-x-2'>Plans <RiArrowDownSLine size={20}/></a></li>
            <li className='hover:text-[#dcca87]'><a href="chefs" className='text-[16px] uppercase flex justify-center items-center gap-x-2'>Chefs <RiArrowDownSLine size={20}/></a></li>
            <li className='hover:text-[#dcca87]'><a href="shop" className='text-[16px] uppercase flex justify-center items-center gap-x-2'>Shop <RiArrowDownSLine size={20}/></a></li>
        </ul>
    </div>
          {/* z */}
          <div className='flex justify-center items-center lg:space-x-8 space-x-4 md:ml-96 lg:ml-0'>
             <LuSearch size={20}className='cursor-pointer hover:text-[#dcca87]'/>
             <AiOutlineShoppingCart size={20}className='cursor-pointer hover:text-[#dcca87]'/>
             <HiMenuAlt3 onClick={() => setNavMobile(true)} className='lg:hidden text-3xl cursor-pointer'/>
             <div className='hidden lg:flex h-[32px] w-[1px] bg-white/60'/>
             <div>
              <button className='hidden lg:flex border-y-2 border-y-[#dcca87] px-10 
                        py-3 text-[#dcca87] font-fan hover:bg-[#dcca87] hover:text-black'>Book Table</button>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header