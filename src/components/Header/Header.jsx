"use client";

import useDeviceType from "@/lib/hooks/useDeviceType";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const deviceType = useDeviceType();
  const [isOpen, setIsOpen] = useState(false);

  let columns = 3;
  if (deviceType === "tablet") columns = 4;
  if (deviceType === "desktop") columns = 6;

  const linkStyles =
    "text-white max-[375px]:text-[16px] max-[375px]:pl-[10px] text-[18px] min-[768px]:text-[26px] min-[1440px]:text-[32px] w-25 min-[1440px]:w-[175px] font-[Play] font-bold flex justify-center min-[1440px]:hover:text-[#FF9305] duration-200 relative after:content[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full gradient-underline";

  return (
    <>
      <header className="absolute w-full bg-black/40 rounded-b-xl h-[60px] min-[768px]:h-[88px] min-[1440px]:h-[110px] pt-1.5 mb-6 z-10">
        <div
          className={`grid gap-[7px] min-[768px]:gap-[15px] min-[1440px]:gap-[26px] items-center justify-items-center ${
            columns === 3
              ? "grid-cols-3"
              : columns === 4
              ? "grid-cols-4"
              : "grid-cols-6"
          }`}
        >
          <Link href="#" className={linkStyles}>
            Coffee Community
          </Link>
          {deviceType === "desktop" ? (
            <>
              <Link href="#" className={`${linkStyles} col-start-3`}>
                Про нас
              </Link>
              <Link href="/menu" className={linkStyles}>
                Меню
              </Link>
              <Link href="#" className={linkStyles}>
                Вакансії
              </Link>
              <Link href="#" className={linkStyles}>
                Відгуки
              </Link>
            </>
          ) : (
            ""
          )}
          {deviceType !== "desktop" ? (
            <button
              className="group col-start-3 min-[768px]:col-start-4 min-[1440px]:col-start-6 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RxHamburgerMenu className="text-[#D9D9D9] min-[1440px]:group-hover:text-[#FF9305] w-6 h-6 min-[768px]:w-10 min-[768px]:h-10 min-[1440px]:w-12 min-[1440px]:h-12" />
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
      {isOpen && (
        <div
          className="fixed w-full inset-0 bg-black/60 h-full z-20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden={!isOpen}
        />
      )}

      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
