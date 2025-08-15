import React from 'react'
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className='bg-black py-4  text-[#C0C0C0] text-[7px] md:text-[12px]  flex justify-center items-center'>
      <div className='flex justify-center items-center gap-2 border-r-1 px-4 mr-4'><p>Powered by </p> <Image src="/images/image.png" loading="lazy" alt="" width={200}
        height={110} className='w-6' />  <p>bepay money</p> </div>
      <div className='flex justify-center items-center gap-2'><p>Organised by </p><Image src="/images/logo.png" loading="lazy" alt="" width={200}
        height={110} className='w-25' /></div>
    </div>
  )
}

export default TopHeader