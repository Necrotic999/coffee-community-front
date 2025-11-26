'use client'
import Image from 'next/image';
import React from 'react';
import useDeviceType from '@/lib/hooks/useDeviceType';
import { IoIosArrowBack } from "react-icons/io";
import { TiStarFullOutline } from 'react-icons/ti';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Review = () => {
  const reviews = [
    { id: 1, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 2, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 3, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 4, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 5, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 6, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 7, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 8, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
  ];


  const deviceType = useDeviceType();
  const filteredReviews = deviceType === 'mobile' ? reviews.slice(0, 2) : reviews;

  const styles = {
    mobile: {
      container: "flex flex-col gap-[37px] items-center",
      card: "bg-[#302F2F] rounded-lg p-6 w-[284px]",
      title: "text-xl font-semibold text-[#E5E5E5] mb-4",
      mainTitle: "text-3xl font-bold text-[#E5E5E5] mb-4 font-advent text-center"
    },
    tablet: {
      container: "flex flex-wrap justify-center gap-6",
      card: "bg-[#302F2F] rounded-lg p-6 w-[272px] lg:w-[313px]",
      title: "text-2xl font-semibold text-[#E5E5E5] mb-4",
      mainTitle: "text-4xl font-bold text-[#E5E5E5] mb-6 font-advent text-center"
    },
    desktop: {
      container: "flex flex-wrap justify-center gap-[120px] w-[1440px] mx-auto",
      card: "bg-[#302F2F] rounded-lg p-8 w-[476px]",
      title: "text-3xl font-semibold text-[#E5E5E5] mb-6",
      mainTitle: "text-5xl font-bold text-[#E5E5E5] mb-8 font-advent text-center"
    }
  };

  const { container, card, title, mainTitle } = styles[deviceType] || styles.mobile;


  

  return (
    <section className="bg-[url('/images/bg_review.png')]  py-12 px-4 sm:px-6 lg:px-8] h-[700px] min-[1440px]:h-[900px] mb-2.5">
        
          <h2 className={mainTitle}>Що про нас говорять наші клієнти</h2>
        {/* <div className='flex justify-center items-center gap-6 md:gap-6 min-[1440px]:gap-20 relative'> */}
          {/* <IoIosArrowBack className='h-8 w-8 md:w-16 md:h-16 min-[1440px]:w-20 min-[1440px]:h-20 absolute -left-4 top-[47%] md:-left-2 md:top-[45%] swiper-button-prev' /> */}
        {/* <div className={container}> */}
          <Swiper
  modules={[Navigation]}
  navigation
  
  spaceBetween={30}
  slidesPerView={1} 
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
  }}
  // style={{
  //   display: 'flex', 
  // }}

>
  {reviews.map((item) => (
    <SwiperSlide key={item.id}>
      <div className={card}>
        <h3 className={title}>{item.title}</h3>
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <TiStarFullOutline key={i} className='w-[35px] h-[35px] text-yellow-400'/>
          ))}
        </div>
        <p className="text-[#E5E5E5]">{item.text}</p>
      </div>
    </SwiperSlide>
  ))}

  {/* <IoIosArrowBack className='h-8 w-8 rotate-180 swiper-button-prev' />
  <IoIosArrowBack className='h-8 w-8 swiper-button-next' /> */}
</Swiper>
        {/* </div> */}
       {/* <div className="w-full max-w-[1200px] mx-auto py-10"> */}
    {/* </div> */}
    </section>
  );
};

export default Review;