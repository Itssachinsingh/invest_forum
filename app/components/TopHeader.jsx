import React from 'react'

const TopHeader = () => {
  return (
    <div className='bg-black py-4  text-[#C0C0C0] text-[7px] md:text-[12px]  flex justify-center items-center'>
            <div className='flex justify-center items-center gap-2 border-r-1 px-4 mr-4'><p>Powered by </p> <img src="/images/image.png" alt=""  className='w-6'/>  <p>bepay money</p> </div>
            <div className='flex justify-center items-center gap-2'><p>Organised by </p><img src="/images/logo.png" alt="" className='w-25' /></div>
    </div>
  )
}

export default TopHeader