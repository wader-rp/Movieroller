import { Rate } from "antd";

export const RatingDisplay = ({ activeData }) => (
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
