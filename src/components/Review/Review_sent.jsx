"use client"
import React, { useState } from "react";
import StarButton from "@/components/Star_rating/Star_rating";
const Review_sent = () => {

  const [barRating, setBarRating] = useState(0);
  const [barHover, setBarHover] = useState(0);

  const [serviceRating, setServiceRating] = useState(0);
  const [serviceHover, setServiceHover] = useState(0);
  

  return (
    <div
      className="
        min-h-screen flex items-center justify-center p-6
        bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-overlay
      "
      style={{
        // backgroundImage: "url('/your-image.jpg')"
      }}
    >
      <div className="max-w-xl w-full bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-xl text-white">

        <h2 className="text-3xl font-bold text-center mb-8">
          Поділіться своїми враженнями
        </h2>

        {/* БАР І ДЕСЕРТИ */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Бар і десерти</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarButton
                key={i}
                index={i}
                currentValue={barRating}
                hoverValue={barHover}
                setValue={setBarRating}
                setHover={setBarHover}
              />
            ))}
          </div>
        </div>

        {/* СЕРВІС */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">Сервіс</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarButton
                key={i}
                index={i}
                currentValue={serviceRating}
                hoverValue={serviceHover}
                setValue={setServiceRating}
                setHover={setServiceHover}
              />
            ))}
          </div>
        </div>

        {/* ІМ'Я */}
        <input
          type="text"
          placeholder="Вкажіть ваше ім'я..."
          className="
            w-full mb-4 p-3 rounded-lg bg-white/20 text-white
            placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400
          "
        />

        {/* ВІДГУК */}
        <textarea
          placeholder="Написати відгук..."
          className="
            w-full mb-6 p-3 h-28 rounded-lg bg-white/20 text-white
            placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none
          "
        />

        {/* КНОПКА */}
        <button
          className="
            w-full py-3 rounded-lg text-lg font-semibold
            bg-gradient-r from-red-600 to-black
            hover:from-red-700 hover:to-gray-900
            transition-all duration-300
          "
        >
          Надіслати відгук
        </button>
      </div>
    </div>
  );
};

export default Review_sent;
