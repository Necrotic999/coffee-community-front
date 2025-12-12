"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import Tooltip from "./Tooltip";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import useDeviceType from "@/lib/hooks/useDeviceType";

import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  const workingHours = [
    { day: "Понеділок", hours: "09:00 - 21:00" },
    { day: "Вівторок", hours: "09:00 - 21:00" },
    { day: "Середа", hours: "09:00 - 21:00" },
    { day: "Четвер", hours: "09:00 - 21:00" },
    { day: "П'ятниця", hours: "09:00 - 22:00" },
    { day: "Субота", hours: "10:00 - 22:00" },
    { day: "Неділя", hours: "10:00 - 22:00" },
  ];

  const [currentDayIndex, setCurrentDayIndex] = useState(dayIndex);
  const [currentDayName, setCurrentDayName] = useState(
    workingHours[dayIndex].day
  );
  const deviceType = useDeviceType();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <footer onClick={handleBackdropClick} className="relative z-20">
      <div className="relative z-10 w-[318px] min-[768px]:w-full flex flex-col min-[768px]:flex-row min-[768px]: justify-between gap-4 px-6 py-2 min-[768px]:px-12 min-[768px]:py-6 min-[1440px]:px-30 min-[1440px]:py-10">
        <div className="flex flex-col gap-4 min-[768px]:gap-8">
          <div className="flex flex-col gap-1.5">
            <h2 className="font-bold text-[16px] min-[768px]:text-2xl min-[1440px]:text-[30px]">
              Контактні дані
            </h2>
            <Link
              href="tel:+380962387754"
              className=" text-[13px] min-[768px]:text-lg min-[1440px]:text-2xl"
            >
              +380962387754
            </Link>
            <p className="text-sm min-[768px]:text-lg min-[1440px]:text-2xl">
              Польський З, Тарасівка,
            </p>
            <p className="text-sm min-[768px]:text-lg min-[1440px]:text-2xl">
              Київська область, Україна
            </p>
          </div>

          <div className="relative">
            <h2 className="font-bold text-[16px] min-[768px]:text-2xl min-[1440px]:text-[30px]">
              Робочий час
            </h2>
            {deviceType !== "mobile" ? (
              <ul className="w-60 min-[1440px]:w-100">
                {workingHours.map(({ day, hours }, idx) => {
                  return (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-[10px] min-[768px]:text-lg min-[1440px]:text-2xl"
                    >
                      <p
                        className={clsx({
                          "font-semibold": day === currentDayName,
                        })}
                      >
                        {day}
                      </p>
                      <p
                        className={clsx({
                          "font-semibold":
                            hours === workingHours[currentDayIndex]?.hours,
                        })}
                      >
                        {hours}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex gap-2 items-center hover:bg-black hover:bg-opacity-60 transition-colors"
              >
                <p className=" text-sm min-[768px]:text-base min-[1440px]:text-2xl">
                  {currentDayName}
                </p>
                <p className=" text-sm min-[768px]:text-base min-[1440px]:text-2xl">
                  {workingHours[currentDayIndex]?.hours || "09:00 - 21:00"}
                </p>
                <IoIosArrowDown
                  className={clsx("duration-180", { "rotate-180": isOpen })}
                />
              </button>
            )}

            {deviceType === "mobile" && isOpen ? (
              <Tooltip
                workingHours={workingHours}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 min-[768px]:gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[16px] min-[768px]:text-xl min-[1440px]:text-[30px]">
              Ми в соцмережах
            </h2>
            <div className="flex items-center gap-2.5 min-[768px]:gap-4 min-[1440px]:gap-6">
              <Link
                target="_blank"
                href="https://www.tiktok.com/@coffee____community"
                className="flex items-center justify-center transition-colors cursor-pointer"
              >
                <RiTiktokLine
                  alt="TikTok"
                  width={19}
                  height={19}
                  className="min-[768px]:w-7 min-[768px]:h-7 min-[1440px]:w-8 min-[1440px]:h-8 hover:text-[#FF9305] duration-200"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/coffee____community"
                className="flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaInstagram
                  alt="Instagram"
                  width={19}
                  height={19}
                  className="min-[768px]:w-7 min-[768px]:h-7 min-[1440px]:w-8 min-[1440px]:h-8 hover:text-[#FF9305] duration-200"
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.google.com/maps/place/Coffee+Community/@50.3366822,30.3040671,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4b59c0eeef635:0x17ed7c9f7e5f830a!8m2!3d50.3366822!4d30.306642!16s%2Fg%2F11mtjzrjrl?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D"
              >
                <SiGooglemaps
                  alt="Google"
                  width={19}
                  height={19}
                  className="min-[768px]:w-7 min-[768px]:h-7 min-[1440px]:w-8 min-[1440px]:h-8 hover:text-[#FF9305] duration-200"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-[16px] min-[768px]:text-2xl min-[1440px]:text-[30px]">
              На карті
            </h2>
            <Map />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-1 min-[768px]:px-2 min-[1440px]:px-10">
        <p className="text-[7px] min-[768px]:text-[10px] min-[1440px]:text-sm">
          © 2025 Coffee Community
        </p>
        <Link
          href="#"
          className="text-[7px] min-[768px]:text-[10px] min-[1440px]:text-sm"
        >
          Політика конфіденційності
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
