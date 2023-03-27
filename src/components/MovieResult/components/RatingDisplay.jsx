import React from "react";
import { Rate } from "antd";

export const RatingDisplay = ({ randomMovie }) => {
  return (
    <div className="movie-rating">
      <Rate
        disabled
        allowHalf
        count={10}
        value={randomMovie.vote_average}
        className="stars-rating"
      />
      <div>{`(${randomMovie.vote_count})`}</div>
    </div>
  );
};
