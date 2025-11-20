import Image from 'next/image';
import { useState } from 'react';


const StarRating = ({ rating, setRating }) => {
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
              starValue <= (hover || rating) 
                ? 'text-yellow-400' 
                : 'text-gray-300'
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            {<Image  src="icons/star.svg" alt="star" width={25} height={25} />}
            
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;