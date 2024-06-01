import { useState, useEffect } from "react";

const Stars = ({ totalStars, rating }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(Array.from({ length: totalStars }, (_, index) => index < rating));
  }, [totalStars, rating]);

  return (
    <div className="flex items-end space-x-1">
      {stars.map((isYellow, index) => (
        <span
          key={index}
          className={`cursor-pointer text-2xl ${isYellow ? "text-yellow-300" : "text-gray-400"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-medium text-gray-800">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default Stars;
