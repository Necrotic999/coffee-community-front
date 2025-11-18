'use client';

import React, { useState } from 'react';

const Footer = () => {
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  const workingHours = [
    { day: 'Понеділок', hours: '09:00 - 21:00' },
    { day: 'Вівторок', hours: '09:00 - 21:00' },
    { day: 'Середа', hours: '09:00 - 21:00' },
    { day: 'Четвер', hours: '09:00 - 21:00' },
    { day: 'П\'ятниця', hours: '09:00 - 22:00' },
    { day: 'Субота', hours: '10:00 - 22:00' },
    { day: 'Неділя', hours: '10:00 - 22:00' }
  ];

  return (
    <footer className="relative max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg font-sans overflow-hidden">
      {/* Фонова картинка */}
      <div 
        className="absolute inset-0 opacity-5 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url ./public/background.jpg',
        }}
      />
      
      {/* Контент */}
      <div className="relative z-10">
        {/* Заголовок */}
        <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
          Ми в соцмережах
        </h1>

        {/* Робочий час з акордеоном */}
        <div className="mb-6">
          <button
            onClick={() => setIsHoursOpen(!isHoursOpen)}
            className="w-full flex justify-between items-center text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <span className="font-semibold text-gray-700">Робочий час</span>
            <span className={`transform transition-transform ${isHoursOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {isHoursOpen && (
            <div className="mt-3 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <table className="w-full">
                <tbody>
                  {workingHours.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-2 pr-4 text-gray-700 font-medium">{item.day}</td>
                      <td className="py-2 text-gray-600 text-right">{item.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Контактні дані */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-700 mb-3">Контактні дані</h2>
          <div className="text-lg font-bold text-gray-800 mb-1">+380962387754</div>
          <div className="text-gray-600 text-sm">
            Польський З, Тарасівка, Київська область, Україна
          </div>
        </div>

        {/* Футер */}
        <div className="pt-4 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <div>© 2025 Coffee Community</div>
            <div className="mt-1">Політика конфіденційності</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;