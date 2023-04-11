import React from "react";
import { Rate } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { addMovieToToWatchList } from "../localStorageManager";

export const RatingDisplay = ({ randomMovie, crewAndCast }) => {
  return (
    <div className="movie-rating-with-add">
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
      <div
        className="add-icon"
        onClick={() => addMovieToToWatchList(randomMovie, crewAndCast)}
      >
        <PlusSquareOutlined className="add-to-watch" />
        <h5>{`Add to watch list`}</h5>
      </div>
    </div>
  );
};
