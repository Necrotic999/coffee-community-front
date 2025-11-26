import Image from 'next/image';
import { useState } from 'react';
import { TiStarFullOutline } from "react-icons/ti";
const StarRating = ({ rating, onRate }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        
        return (
          <button
            type="button"
            key={starValue}
            className={`text-2xl cursor-pointer transition-colors ${
              starValue <= (hover > 0 ? hover : rating) 
                ? 'text-yellow-400' 
                : 'text-[#916767]'
            }`}
            onClick={() => onRate(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            <TiStarFullOutline className='w-[35px] h-[35px]'/>
            
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;