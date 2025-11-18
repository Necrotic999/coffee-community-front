import Image from 'next/image';
import React from 'react';

const Review = () => {
  // Масив відгуків
  const reviews = [
    {
      id: 1,
      title: "Lorem",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text."
    },
    {
      id: 2,
      title: "Lorem", 
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text."
    },
    
  ];

  // Функція для рендерінгу зірочок
  const renderStars = (count = 1, flexDirection = 'row') => {
    return (
      <div className={`flex ${flexDirection === 'column' ? 'flex-col' : 'flex-row'} gap-1`}>
        {Array.from({ length: count }).map((_, index) => (
          <Image 
            key={index}
            src="/yellow_star.svg" 
            alt="star icon" 
            width={25} 
            height={25}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-[url('/bg_review.png')] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#E5E5E5] mb-4 font-advent">
            Що про нас говорять наші клієнти
          </h1>
        </div>

        {/* Відгуки */}
        <div className=" flex flex-col gap-[37px] justify-center items-center" >
          {reviews.map((review, index) => (
            <div key={review.id} className="bg-[#302F2F] rounded-lg p-6 shadow-sm relative w-[284px] ">
              
              <h3 className="text-xl font-semibold text-[#E5E5E5] mb-4">
                {review.title}
              </h3>
              
              {/* Додаткові зірочки всередині (як у другому відгуку) */}
                <div className="mb-3">
                  {renderStars(5, 'row')}
                </div>
              
              
              <p className="text-[#E5E5E5] leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;