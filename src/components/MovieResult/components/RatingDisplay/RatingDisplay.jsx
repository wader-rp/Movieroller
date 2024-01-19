import { Rate } from "antd";

import "./RatingDisplay.css";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

export const RatingDisplay = () => {
  const { activeData } = useMovieResultContext();

  return (
    <div className="movie-rating-container">
      <div className="movie-rating">
        <Rate
          disabled
          allowHalf
          count={10}
          value={activeData.vote_average}
          className="stars-rating"
        />
        <div>{`(${activeData.vote_count})`}</div>
      </div>
    </div>
  );
};
