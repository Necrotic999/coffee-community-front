"use client";
import React, { useEffect, useRef } from "react";
import useDeviceType from "@/lib/hooks/useDeviceType";
import { IoIosArrowBack } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectReviews } from "@/redux/reviews/slice";
import { getReviewsThunk } from "@/redux/reviews/operations";

const Review = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const loading = useSelector(selectLoading);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    dispatch(getReviewsThunk());
  }, [dispatch]);

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

  return (
    <section
      className="py-12 px-4 min-[768px]:px-6 min-[1440px]:px-8 mb-2.5"
      id="reviews"
    >
      <h2 className="text-[20px] min-[768px]:text-4xl min-[1440px]:text-5xl font-bold mb-4 min-[768px]:mb-6 min-[1440px]:mb-8 font-advent text-center">
        Що про нас говорять наші клієнти
      </h2>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          onSwiper={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
        >
          <button
            ref={prevRef}
            className="swiper-button-prev custom-prev top-[58%]"
          >
            <IoIosArrowBack className="h-8 w-8" />
          </button>
          {slicedArray(reviews).map((group, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col gap-[35px] min-[768px]:gap-5 justify-center items-center min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:w-[646px] min-[1440px]:w-[1072px] min-[768px]:m-auto min-[1440px]:gap-[100px]">
                {group.map(({ _id, name, rating, review }) => {
                  return (
                    <div
                      className="bg-[#252424] rounded-lg p-5 min-[1440px]:p-8 w-[284px] max-[375px]:w-[230px] min-[768px]:w-[313px] min-[1440px]:w-[476px] "
                      key={_id}
                    >
                      <h3 className="text-xl min-[768px]:text-2xl min-[1440px]:text-3xl font-semibold mb-1 min-[1440px]:mb-2">
                        {name}
                      </h3>
                      <div className="flex mb-3 gap-1">
                        {Array.from({ length: rating }).map((_, i) => (
                          <TiStarFullOutline
                            key={i}
                            className="w-5 h-5 min-[768px]:w-[30px] min-[768px]:h-[30px] min-[1440px]:w-[46px] min-[1440px]:h-[46px] text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-[12px] min-[768px]:text-[16px] min-[1440px]:text-[26px]">
                        {review}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
          <button ref={nextRef} className="swiper-button-next custom-next">
            <IoIosArrowBack className="h-8 w-8 rotate-180" />
          </button>
        </Swiper>
      )}
    </section>
  );
};

export default Review;
