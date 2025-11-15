"use client"
import Image from "next/image";
import React, { useState } from "react";
const StarButton = ({ index, currentValue, hoverValue, setValue, setHover }) => {
    const filled = (hoverValue || currentValue) >= index;

    return (
      <button
        type="button"
        className="p-1 focus:outline-none"
        aria-label={`${index} зірок`}
        onClick={() => setValue(index)}
        onMouseEnter={() => setHover(index)}
        onMouseLeave={() => setHover(0)}
        onFocus={() => setHover(index)}
        onBlur={() => setHover(0)}
      >
        <Image src = "/star.svg" alt = "staricon" width={25} height={25}/>
      </button>
    );
  }
  export default StarButton;

              // ${filled ? "text-yellow-400" : "text-gray-300"}
            // ${hoverValue >= index ? "scale-125 rotate-3" : ""}