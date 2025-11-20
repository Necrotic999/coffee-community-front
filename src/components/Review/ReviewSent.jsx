'use client';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';

const ReviewSent = () => {
  const [barRating, setBarRating] = useState(0);
  const [assortmentRating, setAssortmentRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут обробка відправки форми
    console.log({
      name,
      barRating,
      assortmentRating,
      serviceRating,
      review
    });
  };

  return (
    <section className="bg-[url('/images/bg_review_sent.png')]  flex items-center justify-center py-12 px-4   flex-col ">
      
    
    
        <h2 className="text-2xl font-bold text-center mb-6 text-[#D9D9D9] text-[22px] font-advent ">
          Поділіться своїми враженнями
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col bg-[#512424] pt-1 pb-4 space-y-4 mb-4 w-[280px]  rounded-[14px] justify-center items-center">
          {/* Бар */}
            <label className="block text-lg font-medium text-[#D9D9D9]">
              Бар і десерти
            </label>
            <StarRating
              rating={barRating} 
              setRating={setBarRating} 
            />
          </div>

        <div className='flex flex-col bg-[#512424] pt-1 pb-4 space-y-4 mb-4 w-[280px]  rounded-[14px] justify-center items-center' >
          {/* Сервіс */}
            <label className="block text-lg font-medium text-[#D9D9D9]">
              Сервіс
            </label>
            <StarRating 
              rating={serviceRating} 
              setRating={setServiceRating} 
            />
          </div>
          

          {/* Ім'я */}
          <div className="flex flex-col gap-0.5">
            <label className="block text-lg font-medium text-[#CECECE] ml-4 text-[14px]">
              Ім`я
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Вкажіть ваше ім'я..."
              className="w-full px-4 py-2  bg-[#512424] rounded-[14px] text-[#D9D9D9] placeholder:text-[#785C5C] "
            />
          </div>

          {/* Відгук */}
          <div className="flex flex-col gap-0.5">
            <label className="block  font-medium text-[#CECECE] ml-5 text-[14px] ">
              Що вам більше всього сподобалось?
            </label>
            <textarea 
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Написати відгук..."
              rows="4"
              className="w-full px-4 py-2 bg-[#512424] rounded-[14px] resize-none text-[#D9D9D9] placeholder:text-[#785C5C]"
            />
          </div>

          {/* Кнопка відправки */}
          <button
            type="submit"
            className="w-full from-[#BE0000] to-[#000000] hover:from-[#D00000] hover:to-[#1a1a1a] text-white font-extrabold text-[20px] py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] neon-gradient-review-button"
          >
            Надіслати відгук
          </button>
        </form>
     
    </section>
  );
};

export default ReviewSent;