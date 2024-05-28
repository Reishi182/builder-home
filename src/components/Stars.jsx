import { useState, useEffect } from "react";

// CSS styling for stars
const starStyle = {
  fontSize: "2em",
  color: "grey",
  cursor: "pointer",
};

const yellowStarStyle = {
  ...starStyle,
  color: "#FBE418",
};

const Stars = ({ totalStars, rating }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(Array.from({ length: totalStars }, (_, index) => index < rating));
  }, [totalStars, rating]);

  return (
    <div>
      {stars.map((isYellow, index) => (
        <span key={index} style={isYellow ? yellowStarStyle : starStyle}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
