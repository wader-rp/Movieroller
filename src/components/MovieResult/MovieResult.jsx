import React, { useState, useEffect } from "react";
import "./movieResultStyles.css";
import { Rate } from "antd";
import { genres } from "../../data/MovieGenres";
import axios from "axios";

export const MovieResult = ({ randomMovie, movieId, apiKey }) => {
  const [cast, setCast] = useState([]);
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    axios.get(url).then((res) => {
      setCast(res.data.cast);
    });
  }, []);
  console.log(cast);
  return (
    <div className="movie-results-container">
      <div className="movie-poster">
        <img
          alt={""}
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w200${randomMovie.poster_path}`}
        />
      </div>
      <div className="movie-info">
        <div className="title-year-text">
          {`${randomMovie.title}\u00A0(${randomMovie.release_date.substring(
            0,
            4
          )})`}
        </div>
        <div className="genres">{genresNames}</div>
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

        <div className="overview">
          <div className="overview-text">{randomMovie.overview}</div>
        </div>
        <div className="actors-slider">
          {cast.slice(0, 5).map((actor) => {
            return (
              <div className="actor-box" key={actor.name}>
                <img
                  className="actor-portrait"
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
                />
                <span className="actor-name">{actor.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="streamings"></div>
    </div>
  );
};
