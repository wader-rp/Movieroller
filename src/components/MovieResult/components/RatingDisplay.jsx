import { Rate } from "antd";

export const RatingDisplay = ({ randomMovie }) => (
  <div className="movie-rating-container">
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
  </div>
);
