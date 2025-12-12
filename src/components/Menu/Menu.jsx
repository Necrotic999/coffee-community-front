"use client";
import React, { useEffect, useState } from "react";
import Additional from "./Additional";
import { useDispatch, useSelector } from "react-redux";
import { selectMenu } from "@/redux/menu/slice";
import { getMenuThunk } from "@/redux/menu/operations";
import Image from "next/image";
import { clsx } from "clsx";

const Menu = () => {
  const dispatch = useDispatch();
  const menus = useSelector(selectMenu);
  const [isSeason, setIsSeason] = useState(false);

  useEffect(() => {
    dispatch(getMenuThunk());
  }, [dispatch]);
  return (
    <>
      <div className="absolute top-0 left-0 h-[150px] min-[768px]:h-[220px] min-[1440px]:h-[370px] bg-[#ff0000] w-full blur-2xl min-[768px]:blur-3xl min-[1440px]:blur-[100px] opacity-30" />
      <section className="relative pt-20 min-[768px]:pt-28 min-[1440px]:pt-42 px-[18px] min-[1440px]:px-[130px] mb-8">
        <div className="flex gap-5 min-[768px]:gap-16 min-[1440px]:gap-56 justify-center items-center mb-4 min-[768px]:mb-6 min-[1440px]:mb-24">
          <button
            type="button"
            className={clsx(
              "text-[20px] max-[375px]:text-[18px] font-bold hover:text-[#FF9305] duration-200 relative after:content[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full gradient-underline cursor-pointer min-[768px]:text-3xl min-[1440px]:text-[50px]",
              { "text-[#FF9305] after:w-full": !isSeason }
            )}
            onClick={() => setIsSeason(false)}
          >
            Основне меню
          </button>
          <button
            type="button"
            className={clsx(
              "text-[20px] max-[375px]:text-[18px] font-bold hover:text-[#FF9305] duration-200 relative after:content[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-200 hover:after:w-full gradient-underline cursor-pointer min-[768px]:text-3xl min-[1440px]:text-[50px]",
              { "text-[#FF9305] after:w-full": isSeason }
            )}
            onClick={() => setIsSeason(true)}
          >
            Сезонне меню
          </button>
        </div>
        {!isSeason ? (
          <>
            <div className="flex flex-col gap-2.5 min-[768px]:gap-[18px] items-center mb-5">
              <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold">
                Кавові напої
              </h3>
              <ul className="flex flex-col gap-3">
                {menus.map(
                  ({
                    title,
                    volume,
                    price,
                    season,
                    _id,
                    type,
                    description,
                    image,
                  }) => {
                    return !season && type === "coffee" ? (
                      <li
                        key={_id}
                        className="w-full h-[63px] max-[375px]:h-[70px] min-[768px]:h-[150px] min-[1440px]:h-[220px] border-2 rounded-[20px] flex gap-3 pr-2"
                      >
                        <Image
                          src={image}
                          alt="coffee image"
                          width={60}
                          height={60}
                          className="rounded-[18px] max-[375px]:w-[66px] max-[375px]:h-[66px] min-[768px]:w-[147px] min-[768px]:h-[147px] min-[1440px]:w-[217px] min-[1440px]:h-[217px]"
                        ></Image>
                        <div className="flex flex-col min-[768px]:py-2">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[11px] min-[768px]:text-[22px] min-[1440px]:text-[30px] font-semibold">
                              {title}
                            </h4>
                            <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[18px]">
                              {volume}
                            </p>
                          </div>
                          <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[20px]">
                            {price}
                          </p>
                          <p className="text-[6px] min-[768px]:text-[13px] min-[1440px]:text-[22px] leading-[9px] min-[768px]:leading-5 min-[1440px]:leading-8">
                            {description}
                          </p>
                        </div>
                      </li>
                    ) : (
                      ""
                    );
                  }
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-2.5 min-[768px]:gap-[18px] items-center mb-5">
              <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold">
                Некавові напої
              </h3>
              <ul className="flex flex-col gap-3">
                {menus.map(
                  ({
                    title,
                    volume,
                    price,
                    season,
                    _id,
                    type,
                    description,
                    image,
                  }) => {
                    return !season && type === "not coffee" ? (
                      <li
                        key={_id}
                        className="w-full min-h-[63px] max-[375px]:h-[70px] min-[768px]:h-[150px] min-[1440px]:h-[220px] border-2 rounded-[20px] flex gap-3 pr-2"
                      >
                        <Image
                          src={image}
                          alt="coffee image"
                          width={60}
                          height={60}
                          className="rounded-[18px] max-[375px]:w-[66px] max-[375px]:h-[66px] min-[768px]:w-[147px] min-[768px]:h-[147px] min-[1440px]:w-[217px] min-[1440px]:h-[217px]"
                        ></Image>
                        <div className="flex flex-col min-[768px]:py-2">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[11px] min-[768px]:text-[22px] min-[1440px]:text-[30px] font-semibold">
                              {title}
                            </h4>
                            <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[18px]">
                              {volume}
                            </p>
                          </div>
                          <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[20px]">
                            {price}
                          </p>
                          <p className="text-[6px] min-[768px]:text-[13px] min-[1440px]:text-[22px] leading-[9px] min-[768px]:leading-5 min-[1440px]:leading-8">
                            {description}
                          </p>
                        </div>
                      </li>
                    ) : (
                      ""
                    );
                  }
                )}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2.5 min-[768px]:gap-[18px] items-center mb-5">
              <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold">
                Кавові напої
              </h3>
              <ul className="flex flex-col gap-3">
                {menus.map(
                  ({
                    title,
                    volume,
                    price,
                    season,
                    _id,
                    type,
                    description,
                    image,
                  }) => {
                    return season && type === "coffee" ? (
                      <li
                        key={_id}
                        className="w-full h-[63px] max-[375px]:h-[70px] min-[768px]:h-[150px] min-[1440px]:h-[220px] border-2 rounded-[20px] flex gap-3 pr-2"
                      >
                        <Image
                          src={image}
                          alt="coffee image"
                          width={60}
                          height={60}
                          className="rounded-[18px] max-[375px]:w-[66px] max-[375px]:h-[66px] min-[768px]:w-[147px] min-[768px]:h-[147px] min-[1440px]:w-[217px] min-[1440px]:h-[217px]"
                        ></Image>
                        <div className="flex flex-col min-[768px]:py-2">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[11px] min-[768px]:text-[22px] min-[1440px]:text-[30px] font-semibold">
                              {title}
                            </h4>
                            <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[18px]">
                              {volume}
                            </p>
                          </div>
                          <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[20px]">
                            {price}
                          </p>
                          <p className="text-[6px] min-[768px]:text-[13px] min-[1440px]:text-[22px] leading-[9px] min-[768px]:leading-5 min-[1440px]:leading-8">
                            {description}
                          </p>
                        </div>
                      </li>
                    ) : (
                      ""
                    );
                  }
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-2.5 min-[768px]:gap-[18px] items-center mb-5">
              <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold">
                Некавові напої
              </h3>
              <ul className="flex flex-col gap-3">
                {menus.map(
                  ({
                    title,
                    volume,
                    price,
                    season,
                    _id,
                    type,
                    description,
                    image,
                  }) => {
                    return season && type === "not coffee" ? (
                      <li
                        key={_id}
                        className="w-full min-h-[63px] max-[375px]:h-[70px] min-[768px]:h-[150px] min-[1440px]:h-[220px] border-2 rounded-[20px] flex gap-3 pr-2"
                      >
                        <Image
                          src={image}
                          alt="coffee image"
                          width={60}
                          height={60}
                          className="rounded-[18px] max-[375px]:w-[66px] max-[375px]:h-[66px] min-[768px]:w-[147px] min-[768px]:h-[147px] min-[1440px]:w-[217px] min-[1440px]:h-[217px]"
                        ></Image>
                        <div className="flex flex-col min-[768px]:py-2">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[11px] min-[768px]:text-[22px] min-[1440px]:text-[30px] font-semibold">
                              {title}
                            </h4>
                            <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[18px]">
                              {volume}
                            </p>
                          </div>
                          <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[20px]">
                            {price}
                          </p>
                          <p className="text-[6px] min-[768px]:text-[13px] min-[1440px]:text-[22px] leading-[9px] min-[768px]:leading-5 min-[1440px]:leading-8">
                            {description}
                          </p>
                        </div>
                      </li>
                    ) : (
                      ""
                    );
                  }
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-2.5 min-[768px]:gap-[18px] items-center mb-5">
              <h3 className="text-xl min-[768px]:text-[28px] min-[1440px]:text-5xl font-semibold">
                Натуральні чаї
              </h3>
              <ul className="flex flex-col gap-3">
                {menus.map(
                  ({
                    title,
                    volume,
                    price,
                    season,
                    _id,
                    type,
                    description,
                    image,
                  }) => {
                    return season && type === "tea" ? (
                      <li
                        key={_id}
                        className="w-full min-h-[63px] max-[375px]:h-[70px] min-[768px]:h-[130px] min-[1440px]:h-[185px] border-2 rounded-[20px] flex items-center gap-3 px-4 min-[1440px]:px-10 py-2"
                      >
                        <div className="flex flex-col min-[768px]:py-2">
                          <div className="flex gap-2 items-center">
                            <h4 className="text-[11px] min-[768px]:text-[22px] min-[1440px]:text-[30px] font-semibold">
                              {title}
                            </h4>
                            <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[18px]">
                              {volume}
                            </p>
                          </div>
                          <p className="text-[8px] min-[768px]:text-[14px] min-[1440px]:text-[20px]">
                            {price}
                          </p>
                          <p className="text-[6px] min-[768px]:text-[13px] min-[1440px]:text-[22px] leading-[9px] min-[768px]:leading-5 min-[1440px]:leading-8">
                            {description}
                          </p>
                        </div>
                      </li>
                    ) : (
                      ""
                    );
                  }
                )}
              </ul>
            </div>
          </>
        )}

        <Additional menus={menus} />
      </section>
    </>
  );
};

export default Menu;
