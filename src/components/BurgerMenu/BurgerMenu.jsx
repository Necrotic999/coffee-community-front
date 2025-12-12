"use client";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const linkStyles = "text-4 text-[#D9D9D9] font-semibold md:text-[24px]";
  return (
    <div
      className="w-[70%] bg-[#111111] h-full fixed top-0 right-0 z-20 pt-1.5 transform transition-transform duration-300 ease-in-out px-1"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="text-white absolute top-1 left-1"
        onClick={() => setIsOpen(false)}
      >
        <MdKeyboardArrowLeft className="fill-[#D9D9D9] w-[30px] h-[30px] " />
      </button>
      <h3 className="text-center text-[#D9D9D9] font-bold text-[18px] font-[Play] max-[375px]:mb-10 mb-[60px]">
        Coffee community
      </h3>
      <div className="px-10 max-[375px]:px-8 md:px-[30px] max-[375px]:mb-20 mb-5 md:mb-25">
        <ul className="flex flex-col max-[375px]:gap-4 gap-5 max-[375px]:mb-5 mb-[30px]">
          <li>
            <Link href="#" className={linkStyles}>
              Про нас
            </Link>
          </li>
          <li>
            <Link href="/menu" className={linkStyles}>
              Меню
            </Link>
          </li>
          <li>
            <Link href="#" className={linkStyles}>
              Вакансії
            </Link>
          </li>
          <li>
            <Link href="#" className={linkStyles}>
              Відгуки
            </Link>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <div>
            <p className="text-[14px] md:text-[20px] mb-1">Соцмережі</p>
            <div className="flex gap-2.5 mb-2.5">
              <Link
                href="https://www.instagram.com/coffee____community"
                target="_blank"
              >
                <FaInstagram className="fill-[#D9D9D9] w-5 md:w-7 h-5 md:h-7" />
              </Link>
              <Link
                href="https://www.tiktok.com/@coffee____community"
                target="_blank"
              >
                <RiTiktokLine className="fill-[#D9D9D9] w-5 h-5 md:w-7 md:h-7" />
              </Link>
              <Link
                href="https://www.google.com/maps/place/Coffee+Community/@50.3366822,30.3040671,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4b59c0eeef635:0x17ed7c9f7e5f830a!8m2!3d50.3366822!4d30.306642!16s%2Fg%2F11mtjzrjrl?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <SiGooglemaps className="fill-[#D9D9D9] w-5 h-5 md:w-7 md:h-7" />
              </Link>
            </div>
            <div className="mb-2.5">
              <a
                href="tel: +380962387754"
                className="text-[12px] md:text-[16px]"
              >
                +38(096)-238-7754
              </a>
              <p className="w-[136px] text-[12px] md:text-[16px]">
                Польський 3, Тарасівка, Київська область, Україна
              </p>
            </div>
          </div>
          <div>
            <p className="text-4 max-[375px]:text-[14px] font-[Play] font-bold mb-1 md:text-[20px]">
              Робочий час
            </p>
            <ul className="gap-1">
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Понеділок</p>
                <p>09:00 - 21:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Вівторок</p>
                <p>09:00 - 21:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Середа</p>
                <p>09:00 - 21:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Четвер</p>
                <p>09:00 - 21:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>П`ятниця</p>
                <p>09:00 - 22:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Субота</p>
                <p>10:00 - 22:00</p>
              </li>
              <li className="text-[14px] max-[375px]:text-[12px] md:text-[16px] flex gap-2.5 justify-between items-center">
                <p>Неділя</p>
                <p>10:00 - 22:00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[8px] md:text-[10px] font-medium">
          © 2025 Coffee Community
        </p>
        <Link href="#" className="text-[8px] md:text-[10px] font-medium">
          Політика конфіденційності
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
