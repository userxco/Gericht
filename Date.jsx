import React from 'react'

const Date = () => {
  return (
    <div className='bg-date bg-cover bg-center bg-repeat bg-fixed md:h-[600px] h-[400px] '>
      <div className='container md:max-w-[2100px] mx-auto h-[600px] bg-black/40'>
        <div>
          {/* text */}
          <div className='flex flex-col justify-center md:pl-32 pl-12 items-start md:h-[600px] h-[400px] text-white'>
            <h2 className='md:text-[128px] text-[72px] font-fan text-[#dcca87]'>Happy Hours</h2>
            <p className='md:text-[28px] text-[23px] font-fan '>Monday - Friday (4:00 Pm - 7:00 Pm)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Date