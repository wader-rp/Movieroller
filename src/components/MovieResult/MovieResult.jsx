import React from "react";
import "./movieResultStyles.css";
import { genres } from "../../data/MovieGenres";

export const MovieResult = ({ randomMovie }) => {
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres.map(
    (id) => genres.find((genre) => genre.id === id).name
  );
  console.log(genresNames);

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
      <div className="overview">
        <div className="overview-text">{randomMovie.overview}</div>
      </div>
    </div>
  );
};
