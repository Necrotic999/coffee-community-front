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
        <Image src='/images/first@3x.png' alt='' width={321} height={210} sizes='100vw' className='w-full max-w-[1440px]' /> 
        <div className='flex gap-1 w-full '>
          <Image src='/images/second@3x.png' alt='' width={160} height={175} sizes='100vw' className='w-full '/>
          <Image src='/images/third@3x.png' alt='' width={157} height={175} sizes='100vw' className='w-full'/>
        </div>
        <Image src='/images/fourth@3x.png' alt='' width={321} height={210} sizes='100vw' className='w-full'/>
        <Image src='/images/fifth@3x.png' alt='' width={321} height={210} sizes='100vw' className='w-full'/>
        <div className='flex gap-1 w-full '>
        <Image src='/images/sixth@3x.png' alt='' width={321} height={210} sizes='100vw' className='w-full'/>

        {deviceType === 'tablet' || deviceType === 'desktop' ? <Image src='/images/Gallery.png' alt='' width={328} height={438} sizes='100vw' className='w-full' /> : ''}
        </div>
      </div>

    </section>

  )
}

export default Atmosphere


