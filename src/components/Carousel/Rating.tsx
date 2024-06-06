// components/RatingStars.tsx
import React from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
}

const Rating: React.FC<RatingStarsProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className="rating-stars flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <IoMdStar key={i} style={{ color: "#FFD700" }} />
          //   <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD700" }} />
        ))}
      {/* {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: "#FFD700" }} />} */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <IoMdStarOutline key={i + fullStars} style={{ color: "#FFD700" }} />
        ))}
    </div>
  );
};

export default Rating;
