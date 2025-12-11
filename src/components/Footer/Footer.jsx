'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Map from '../Map/Map';
import Tooltip from './Tooltip';


const Footer = () => {
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [currentDayName, setCurrentDayName] = useState('Понеділок');
  const [mapType, setMapType] = useState('roadmap');
  const [mapZoom, setMapZoom] = useState(16);
  const [mapCenter, setMapCenter] = useState({ lat: 50.3366822, lng: 30.306642 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  const workingHours = [
    { day: 'Понеділок', hours: '09:00 - 21:00' },
    { day: 'Вівторок', hours: '09:00 - 21:00' },
    { day: 'Середа', hours: '09:00 - 21:00' },
    { day: 'Четвер', hours: '09:00 - 21:00' },
    { day: 'П\'ятниця', hours: '09:00 - 22:00' },
    { day: 'Субота', hours: '10:00 - 22:00' },
    { day: 'Неділя', hours: '10:00 - 22:00' }
  ];

  useEffect(() => {
    const today = new Date().getDay();
    let dayIndex;
    if (today === 0) {
      dayIndex = 6;
    } else {
      dayIndex = today - 1;
    }
    
    setCurrentDayIndex(dayIndex);
    setCurrentDayName(workingHours[dayIndex].day);
  }, []);

  // Генерація URL для карти з поточними параметрами
  const getMapUrl = () => {
    const { lat, lng } = mapCenter;
    const type = mapType === 'satellite' ? 'k' : 'm';
    return `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=${mapZoom}&maptype=${type}`;
  };

  // Для демонстрації без API ключа (статична карта)
  const getStaticMapUrl = () => {
    const { lat, lng } = mapCenter;
    const type = mapType === 'satellite' ? 'k' : 'm';
    return `https://maps.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed&t=${type}`;
  };

  // Обробка збільшення масштабу
  const handleZoomIn = () => {
    if (mapZoom < 20) {
      setMapZoom(prev => prev + 1);
    }
  };

  // Обробка зменшення масштабу
  const handleZoomOut = () => {
    if (mapZoom > 1) {
      setMapZoom(prev => prev - 1);
    }
  };

  // Початок перетягування
  const handleDragStart = (e) => {
    if (e.button !== 0) return; // Тільки ліва кнопка миші
    setIsDragging(true);
    setDragStart({
      x: e.clientX || e.touches[0].clientX,
      y: e.clientY || e.touches[0].clientY
    });
    e.preventDefault();
  };

  // Перетягування карти
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (!clientX || !clientY) return;
    
    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;
    
    // Коефіцієнт для перетворення пікселів в градуси
    const pixelsToDegrees = 0.0001 * (21 - mapZoom); // Залежить від масштабу
    
    setMapCenter(prev => ({
      lat: prev.lat - deltaY * pixelsToDegrees,
      lng: prev.lng + deltaX * pixelsToDegrees
    }));
    
    setDragStart({ x: clientX, y: clientY });
  };

  // Кінець перетягування
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Повернення до вихідної позиції
  const handleResetMap = () => {
    setMapCenter({ lat: 50.3366822, lng: 30.306642 });
    setMapZoom(16);
  };

  // Обробка прокрутки колеса миші для масштабування
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }
  };

  // Повний URL для відкриття в Google Maps
  const fullMapUrl = `https://www.google.com/maps/@${mapCenter.lat},${mapCenter.lng},${mapZoom}z`;

  return (
    <footer className="relative p-6 rounded-lg shadow-lg font-sans overflow-hidden 
                      w-full min-[768px]:p-8 min-[768px]:grid min-[768px]:grid-cols-2 min-[768px]:gap-8
                      min-[1440px]:p-12 min-[1440px]:gap-12">
      
      {/* Контент */}
      <div className="relative z-10 min-[768px]:contents w-[243px]">
        
        {/* Ліва колонка - Соцмережі та Робочий час */}
        <div className="flex flex-col gap-[17px] min-[768px]:gap-8">
          
          {/* Соцмережі */}
          <div className="flex flex-col gap-1.5">
            <h2 className="font-semibold text-white text-2xl
                          min-[768px]:text-xl min-[768px]:mb-4 
                          min-[1440px]:text-2xl">Контактні дані</h2>
            <p className="text-lg font-bold text-white text-[13px]
                          min-[768px]:text-2xl 
                          min-[1440px]:text-3xl">+380962387754</p>
            <p className="text-white text-sm 
                          min-[768px]:text-base 
                          min-[1440px]:text-lg">
              Польський З, Тарасівка, Київська область, Україна
            </p>
          </div>
         

          {/* Робочий час */}
          <div className="mb-6 min-[768px]:mb-0 relative">
            <h2 className="font-semibold text-white mb-1 
                          min-[768px]:text-xl min-[768px]:mb-4 
                          min-[1440px]:text-2xl">Робочий час</h2>
            
              {/* Заголовок акордеону */}
              <button
                onClick={() => setIsHoursOpen(!isHoursOpen)}
                className="w-full flex gap-2 items-center hover:bg-black hover:bg-opacity-60 transition-colors"
              >
                <p className="text-white text-sm min-[768px]:text-base 
                              min-[1440px]:text-lg">
                  {currentDayName} {workingHours[currentDayIndex]?.hours || '09:00 - 21:00'}
                </p>
                <span className={`transform transition-transform ${isHoursOpen ? 'rotate-180' : ''} text-white 
                               min-[768px]:text-lg 
                               min-[1440px]:text-xl`}>
                  ▼
                </span>
              </button>

{isHoursOpen ? <Tooltip workingHours={workingHours}/> : ""}
              
              
              {/* Розгорнутий контент */}
              {/* {isHoursOpen && (
                <div className="border-t border-gray-200 p-3 
                              min-[768px]:p-4 
                              min-[1440px]:p-5">
                  <table className="w-full">
                    <tbody>
                      {workingHours.map((item, index) => (
                        <tr key={index} className={`border-b border-gray-100 last:border-b-0 ${index === currentDayIndex ? 'font-semibold' : ''}`}>
                          <td className="py-2 pr-4 text-white text-sm 
                                       min-[768px]:text-base 
                                       min-[1440px]:text-lg">
                            {item.day}
                            {index === currentDayIndex && <span className="ml-2 text-xs opacity-75">(сьогодні)</span>}
                          </td>
                          <td className="py-2 text-white text-sm text-right 
                                       min-[768px]:text-base 
                                       min-[1440px]:text-lg">{item.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )} */}
            
          </div>
        </div>

        {/* Права колонка - Контакти та Карта */}
        <div className="min-[768px]:flex min-[768px]:flex-col min-[768px]:gap-8">
          
          {/* Контактні дані */}
           <div className="mb-6 min-[768px]:mb-0">
            <h2 className="font-vollkorn text-white mb-3 
                          min-[768px]:text-xl min-[768px]:mb-4 
                          min-[1440px]:text-2xl">Ми в соцмережах</h2>

            {/* Іконки соцмереж */}
            <div className="flex items-center gsp-2.5
                          min-[768px]:gap-4
                          min-[1440px]:gap-6">
              {/* TikTok */}
              <Link target='_blank' href='#' className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer 
                                 min-[768px]:w-12 min-[768px]:h-12 
                                 min-[1440px]:w-14 min-[1440px]:h-14">
                <Image 
                  src="/icons/tiktok.svg" 
                  alt="TikTok"
                  width={19}
                  height={19}
                  className="w-6 h-6 
                            min-[768px]:w-7 min-[768px]:h-7 
                            min-[1440px]:w-8 min-[1440px]:h-8"
                />
              </Link>

              {/* Instagram */}
              <Link target='_blank' href='#' className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center justify-center  hover:bg-opacity-30 transition-colors cursor-pointer 
                                 min-[768px]:w-12 min-[768px]:h-12 
                                 min-[1440px]:w-14 min-[1440px]:h-14">
                <Image
                  src="/icons/instagram.svg" 
                  alt="Instagram"
                  width={19}
                  height={19}
                  className="w-6 h-6 
                            min-[768px]:w-7 min-[768px]:h-7 
                            min-[1440px]:w-8 min-[1440px]:h-8"
                />
              </Link>

              {/* Google */}
              <Link target='_blank' href='#' className="w-10 h-10 bg-opacity-20 rounded-lg flex items-center  justify-center hover:bg-opacity-30 transition-colors cursor-pointer 
                                 min-[768px]:w-12 min-[768px]:h-12 
                                 min-[1440px]:w-14 min-[1440px]:h-14">
                <Image 
                  src="/icons/google.svg" 
                  alt="Google"
                  width={19}
                  height={19}
                  className="w-6 h-6 
                            min-[768px]:w-7 min-[768px]:h-7 
                            min-[1440px]:w-8 min-[1440px]:h-8"
                />
              </Link>
            </div>
          </div>
          <h2 className='text-white'>На карті</h2>
              <Map/>
        </div>  

        {/* Футер */}
        <div className="pt-4 border-t border-white border-opacity-30 
                      min-[768px]:col-span-2 min-[768px]:mt-8 min-[768px]:pt-6 
                      min-[1440px]:pt-8 min-[1440px]:border-t-2">
          <div className="flex flex-col min-[768px]:flex-row min-[768px]:justify-between min-[768px]:items-center">
            <p className="text-white text-sm mb-2 min-[768px]:mb-0 min-[768px]:text-base min-[1440px]:text-lg">
              © 2025 Coffee Community
            </p>
            <p className="text-white text-sm min-[768px]:text-base min-[1440px]:text-lg">
              Політика конфіденційності
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;