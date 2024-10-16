import React from "react";

import StarFill from "../../../svg/StarFill";
import StarOutline from "../../../svg/StarOutline";

export default function StarRating(props) {
  const fullStars = Math.floor(props.star);
  const HalfStar = 5 - fullStars;
  const starIcons = [];
  for (let i = 0; i < fullStars; i++) {
    starIcons.push(<StarFill key={"full" + i} fill="#ff0037" class="w-4" />);
  }
  if (HalfStar > 0) {
    for (let i = 0; i < HalfStar; i++) {
      starIcons.push(
        <StarOutline key={"half" + i} fill="#ff888c" class="w-4" />,
      );
    }
  }
  return <div className="stars flex gap-1">{starIcons}</div>;
}

