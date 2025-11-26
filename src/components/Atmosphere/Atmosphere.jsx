'use client'
import useDeviceType from '@/lib/hooks/useDeviceType'
import Image from 'next/image'
import React from 'react'

const Atmosphere = () => {
  const deviceType = useDeviceType()
  return (
    <section className='pt-[18px] pb-[30px] px-[27px] bg-[url("/images/fone.png")] bg-cover bg-no-repeat mb-2.5 '>
      <h2 className='text-[20px] md:text-[36px] min-[1440px]:text-[48px] font-advent font-bold text-[#E5E5E5] text-center mb-3.5'>
        Наша атмосфера
      </h2>
      <div className='flex flex-col justify-center items-center gap-1  '>
        <Image src='/images/first_pic.png' alt='' width={321} height={210} className='min-[768px]:w-[666px] min-[768px]:h-[434px]' /> 
        <div className='flex gap-1 '>
          <Image src='/images/second_pic.png' alt='' width={160} height={175} className='min-[768px]:w-[333px] min-[768px]:h-[370px]'/>
          <Image src='/images/third_pic.png' alt='' width={157} height={175} className='min-[768px]:w-[331px] min-[768px]:h-[370px]'/>
        </div>
        <Image src='/images/fourth_pic.png' alt='' width={321} height={210} className='min-[768px]:w-[667px] min-[768px]:h-[448px]'/>
        <Image src='/images/fifth_pic.png' alt='' width={321} height={210} className='min-[768px]:w-[666px] min-[768px]:h-[463px]'/>
        <div className='flex gap-1 '>
        <Image src='/images/sixth_pic.png' alt='' width={321} height={210} className='min-[768px]:w-[329px] min-[768px]:h-[438px]'/>

        {deviceType === 'tablet' || deviceType === 'desktop' ? <Image src='/images/Gallery.png' alt='' width={328} height={438} className='min-[768px]:w-[328px] min-[768px]:h-[438px] ' /> : ''}
        </div>
      </div>

    </section>

  )
}

export default Atmosphere


