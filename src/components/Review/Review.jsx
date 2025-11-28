"use client";
import React from "react";
import useDeviceType from "@/lib/hooks/useDeviceType";
import { IoIosArrowBack } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Review = () => {
  const reviews = [
    {
      id: 1,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 2,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 3,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 4,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 5,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 6,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 7,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
    {
      id: 8,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.",
    },
  ];

  const deviceType = useDeviceType();

  const slicedArray = (arr) => {
    const result = [];
    for (
      let i = 0;
      i < arr.length;
      deviceType === "mobile" ? (i += 2) : (i += 4)
    ) {
      result.push(
        deviceType === "mobile" ? arr.slice(i, i + 2) : arr.slice(i, i + 4)
      );
    }
    return result;
  };

  console.log(slicedArray(reviews));

  return (
    <section className="bg-[url('/images/bg_review.png')]  py-12 px-4 md:px-6 min-[1440px]:px-8 h-[700px] min-[1440px]:h-[900px] mb-2.5">
      <h2 className="text-[20px] md:text-4xl min-[1440px]:text-5xl! font-bold mb-4 md:mb-6 min-[1440px]:mb-8 font-advent text-center">
        Що про нас говорять наші клієнти
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={1}
      >
        {slicedArray(reviews).map((group, idx) => (
          <SwiperSlide key={idx}>
            <IoIosArrowBack className="fill-white h-8 w-8 md:w-16 md:h-16 min-[1440px]:w-20! min-[1440px]:h-20! swiper-button-prev -left-3.5!" />
            <div className="flex flex-col gap-[35px] md:gap-5 justify-center items-center md:flex-row md:flex-wrap md:w-[646px] min-[1440px]:w-[1072px]! md:m-auto min-h-[391px] md:min-h-[488px] min-[1440px]:min-h-[696px]!">
              {group.map((review) => {
                return (
                  <div
                    className="bg-[#302F2F] rounded-lg p-5 min-[1440px]:p-8! w-[284px] max-[375px]:w-[230px] md:w-[313px] min-[1440px]:w-[476px]! "
                    key={review.id}
                  >
                    <h3 className="text-xl md:text-2xl min-[1440px]:text-3xl! font-semibold mb-1 min-[1440px]:mb-2!">
                      {review.title}
                    </h3>
                    <div className="flex mb-3 gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <TiStarFullOutline
                          key={i}
                          className="w-5 h-5 md:w-[30px] md:h-[30px] min-[1440px]:w-[46px]! min-[1440px]:h-[46px]! text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-[12px] md:text-[16px] min-[1440px]:text-[26px]!">
                      {review.text}
                    </p>
                  </div>
                );
              })}
            </div>
            <IoIosArrowBack className="fill-white h-8 w-8 md:w-16 md:h-16 min-[1440px]:w-20! min-[1440px]:h-20! rotate-180 swiper-button-next relative -right-3.5!" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
