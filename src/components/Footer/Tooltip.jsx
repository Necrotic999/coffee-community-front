"use client";
import React from "react";

const Tooltip = ({ workingHours, isOpen, setIsOpen }) => {
  return (
    // <div
    //   className="fixed inset-0 z-50 flex items-center justify-center"
    //   onClick={handleBackdropClick}
    // >
    <ul className="absolute py-3 px-4 w-[180px] rounded-[15px] bg-[#611B1B] -top-[105px] -right-3">
      {workingHours.map(({ day, hours }, idx) => {
        return (
          <li
            key={idx}
            className="text-white flex justify-between items-center text-[10px]"
          >
            <p>{day}</p>
            <p>{hours}</p>
          </li>
        );
      })}
    </ul>
    // </div>
  );
};

export default Tooltip;
