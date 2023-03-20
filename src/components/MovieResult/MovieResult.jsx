import React from "react";
import "./movieResultStyles.css";
import { Rate } from "antd";
import { genres } from "../../data/MovieGenres";

export const MovieResult = ({ randomMovie }) => {
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres.map(
    (id) => genres.find((genre) => genre.id === id).name
  );
  console.log(genresNames);

  return (
    <div className="movie-results-container">
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
      <div className="movie-info">
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
        <div className="overview">
          <div className="overview-text">{randomMovie.overview}</div>
        </div>
      </div>
      <div className="streamings"></div>
    </div>
  );
};
