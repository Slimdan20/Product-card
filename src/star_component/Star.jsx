import { useState } from 'react';

const Star = ({initialRating = 0, onRatingChange, color = 'gold'}) => {
    const [rating, setRating] = useState(initialRating);

    const handleRatingClick = (newRating) => {
        setRating(newRating);
        if(onRatingChange){
            onRatingChange(newRating)
        }
    };
  return (
    <div className='star'>
        {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`bx ${index < rating ? "bxs-star" : "bx-star"}`}
              style={{ color, cursor: "pointer" }}
              onClick={() => handleRatingClick(index + 1)}
            ></i>
        ))}
      
    </div>
  );
;}

export default Star
