import Image from 'next/image'
import React from 'react'

const Vacancies = () => {
  return (
    <section>
    <div className='w-full h-[60px] bg-[#FF0000] blur-3xl z-0 relative top-0 left-0'/>
    <div className='flex  text-center z-10 mt-5'>
        <h2 className='font-[play] font-bold text-[#FFFFFF] text-[26px]'>Хочешь приєднатися до нашої команди?</h2>
    </div>
    <div className='flex relative top-5 left-[17px]'>
        <Image src='/images/image12.png' alt='' width={184} height={123} className='min-[768px]:w-[666px] min-[768px]:h-[434px]' />
    </div>
    </section>
  )
}

export default Vacancies