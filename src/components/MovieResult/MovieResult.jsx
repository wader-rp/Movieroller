import React from "react";
import "./movieResultStyles.css";
export const MovieResult = ({ randomMovie }) => {
  return (
    <div>
      <img
        className="poster-image"
        src={`https://image.tmdb.org/t/p/w200${randomMovie.poster_path}`}
      />
      <div className="title-year">
        <div className="title-year title">{randomMovie.title} </div>
        <div className="title-year year">
          {`\u00A0(${randomMovie.release_date.substring(0, 4)})`}
        </div>
      </div>

      <div>Categories</div>
    </div>
  );
};
