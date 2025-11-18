'use client'
import Image from 'next/image';
import React from 'react';
import useDeviceType from '@/lib/hooks/useDeviceType';

const Review = () => {
  const reviews = [
    { id: 1, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 2, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 3, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
    { id: 4, title: "Lorem", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text." },
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
      card: "bg-[#302F2F] rounded-lg p-6 w-[313px]",
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
    <section className="bg-[url('/images/bg_review.png')] min-h-screen py-12 px-4 sm:px-6 lg:px-8] h-[476px] md:h-[684px] min-[1440px]:h-[1265px]">
        
          <h2 className={mainTitle}>Що про нас говорять наші клієнти</h2>

        <div className={container}>
          {filteredReviews.map((review) => (
            <div key={review.id} className={card}>
              <h3 className={title}>{review.title}</h3>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Image key={i} src="icons/yellow_star.svg" alt="star" width={25} height={25} />
                ))}
              </div>
              <p className="text-[#E5E5E5] leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Review;