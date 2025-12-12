import Image from "next/image";
import React from "react";

const Benefits = () => {
  const ulStyles = {
    liStyle:
      "bg-[#252424] bg-neutral text-neutral-100 rounded-2xl px-5 py-4 shadow-lg w-[200px] h-[162px] min-[768px]:w-[265px] min-[768px]:h-[190px] min-[768px]:py-[18px] min-[768px]:px-[22px] min-[1440px]:w-[482px] min-[1440px]:h-[335px] min-[1440px]:py-[18px] min-[1440px]:px-[22px]",
    h3Style:
      "h-[17px] text-sm text-semibold flex items-center min-[768px]:text-[18px] min-[1440px]:text-[30px]",
    divStyle: "flex gap-3.5 mb-3.5 items-center",
    pStyle:
      "text-sm text-neutral-300min-[768px]:text-[18px] min-[1440px]:text-[30px]",
    iconsStyle:
      "min-[768px]:w-[33px] min-[768px]:h-[33px] min-[1440px]:w-[55px] min-[1440px]:h-[55px]",
  };
  return (
    <section className="relative w-full px-6 py-5">
      <h2 className="text-center text-xl min-[768px]:text-[32px] font-merriweather font-bold mb-7 min-[1440px]:text-[50px]!">
        Чому обирають саме нас
      </h2>
      <ul className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:flex-wrap min-[768px]:w-[620px] min-[768px]:m-auto min-[1440px]:w-[1125px] min-[1440px]:gap-28">
        <li className={ulStyles.liStyle}>
          <div className={ulStyles.divStyle}>
            <Image
              className={ulStyles.iconsStyle}
              src="/icons/coffee.svg"
              alt="coffee icon"
              width={25}
              height={25}
            ></Image>
            <h3 className={ulStyles.h3Style}>Преміум кава</h3>
          </div>
          <p className={ulStyles.pStyle}>
            Ми готуємо каву лише зі 100% арабіки. Чистий, насичений смак і
            природний аромат.
          </p>
        </li>

        <li className={`${ulStyles.liStyle} ml-auto`}>
          <div className={ulStyles.divStyle}>
            <Image
              className={ulStyles.iconsStyle}
              src="/icons/clock.svg"
              alt="clock icon"
              width={25}
              height={25}
            ></Image>
            <h3 className={ulStyles.h3Style}>Кава без затримок</h3>
          </div>
          <p className={ulStyles.pStyle}>
            Ваша кава буде готова за декілька хвилин. Без черг і очікувань.
            Швидко, смачно і по-справжньому.
          </p>
        </li>

        <li className={ulStyles.liStyle}>
          <div className={ulStyles.divStyle}>
            <Image
              className={ulStyles.iconsStyle}
              src="/icons/pero.svg"
              alt="people icon"
              width={25}
              height={25}
            ></Image>
            <h3 className={ulStyles.h3Style}>Авторські рецепти</h3>
          </div>
          <p className={ulStyles.pStyle}>
            Унікальні фірмові кавові напої, яких Ви не знайдете в інших
            кав`ярнях.
          </p>
        </li>

        <li className={`${ulStyles.liStyle} ml-auto`}>
          <div className={ulStyles.divStyle}>
            <Image
              className={ulStyles.iconsStyle}
              src="/icons/people.svg"
              alt="pero icon"
              width={25}
              height={25}
            ></Image>
            <h3 className={ulStyles.h3Style}>Атмосфера</h3>
          </div>
          <p className={ulStyles.pStyle}>
            Затишний простір, аромат свіжої кави, приємна музика.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Benefits;
