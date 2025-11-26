"use client";

import useDeviceType from "@/lib/hooks/useDeviceType";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const deviceType = useDeviceType();
  const [isOpen, setIsOpen] = useState(false);

  let columns = 3;
  if (deviceType === "tablet") columns = 4;
  if (deviceType === "desktop") columns = 6;

  const columnsBg = [
    "/images/comics1.png",
    "/images/comics2.png",
    "/images/comics3.png",
    "/images/comics4.png",
    "/images/comics5.png",
    "/images/comics6.png",
  ];

  return (
    <section className="relative">
      {/* <Header /> */}

      <div
        className={`grid gap-[7px] min-[768px]:gap-[15px] min-[1440px]:gap-[26px] ${
          columns === 3
            ? "grid-cols-3"
            : columns === 4
            ? "grid-cols-4"
            : "grid-cols-6"
        }`}
      >
        {Array.from({ length: columns }).map((_, idx) => {
          return (
            <div
              key={idx}
              className={`w-full h-[600px] min-[768px]:h-[800px] min-[1440px]:h-[900px] bg-no-repeat bg-cover`}
              style={{ backgroundImage: `url(${columnsBg[idx]})` }}
            />
          );
        })}
      </div>
      <div className="absolute w-full top-[84px] min-[768px]:top-32 min-[1440px]:top-[175px] left-0 bg-black/40 rounded-t-xl h-[516px] min-[768px]:h-[680px] min-[1440px]:h-[726px] py-10 px-5 min-[768px]:py-[50px] min-[768px]:px-[60px]">
        <div className="flex min-[768px]:justify-start h-[70px] min-[768px]:h-[110px]">
          <h1 className="text-white text-[30px] font-[Play] font-extrabold max-[375px]:-ml-5 max-[375px]:relative max-[375px]:left-5 max-[375px]:text-[25px] min-[768px]:text-[52px] min-[1440px]:text-[76px]">
            Кожен день -
            <span className="text-[#E31E1E] text-[30px] font-[Play] font-extrabold relative top-[30px] min-[768px]:top-[50px] right-[38px] max-[375px]:text-[25px] min-[768px]:text-[52px] min-[1440px]:text-[76px] min-[1440px]:top-0 min-[1440px]:right-0 min-[1440px]:ml-4">
              подвиг
            </span>
          </h1>
        </div>
        <div className="flex min-[768px]:justify-start h-[70px] min-[768px]:h-[110px] mb-16 min-[768px]:mb-[100px] min-[1440px]:mb-[130px]">
          <p className="text-white text-[30px] font-[Play] font-extrabold relative left-7 min-[1440px]:left-[60px] max-[375px]:text-[25px] min-[768px]:text-[52px] min-[1440px]:text-[76px]">
            Кожна кава -
            <span className="text-[#DA9F1F] text-[30px] font-[Play] font-extrabold relative top-[30px] min-[768px]:top-[50px] right-[45px] max-[375px]:text-[25px] min-[768px]:text-[52px] min-[1440px]:text-[76px] min-[1440px]:top-0 min-[1440px]:right-0 min-[1440px]:ml-4">
              нагорода
            </span>
          </p>
        </div>
        <p className="text-[18px] min-[768px]:text-[26px] min-[1440px]:text-[32px] w-[300px] min-[768px]:w-[470px] min-[1440px]:w-[750px] font-medium text-[#A8A8A8] mb-3 min-[768px]:mb-[22px]">
          Відчуйте силу справжньої кави у нашій кав’ярні. Кожна чашка - це заряд
          енергії на цілий день
        </p>
        <Link
          href="/menu"
          className="neon-gradient-button flex justify-center items-center rounded-sm w-[260px] min-[768px]:w-[446px] h-9 min-[768px]:h-[60px] text-[18px] min-[768px]:text-[30px] text-[#DCDCDC] font-extrabold min-[768px]:m-0"
        >
          Переглянути меню
        </Link>
      </div>
    </section>
  );
};

export default Hero;
