import React, { useState, useEffect, useRef } from "react";
import "./movieResultStyles.css";
import { genres } from "../../data/MovieGenres";
import axios from "axios";

import { RatingDisplay } from "./components/RatingDisplay";
import { MoviePoster } from "./components/MoviePoster";
import { ActorsSlider } from "./components/ActorsSlider";
import { MovieTitle } from "./components/Title";
import { CastDisplay } from "./components/CastDisplay/CastDisplay";
import { ToWatchAndStreamings } from "./components/Footer/ToWatchAndStreamings";

export const MovieResult = ({ randomMovie, movieId, apiKey }) => {
  const [crew, setCrew] = useState([]);

  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    axios.get(url).then((res) => {
      setCrew(res.data.crew);
    });
  }, []);

  return (
    <>
      <div
        className="movie-results-container-bg"
        style={{
          backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${randomMovie.poster_path}
        )`,
        }}
      >
        <div className="movie-results-container">
          <MoviePoster randomMovie={randomMovie} />
          <div className="movie-info">
            <MovieTitle randomMovie={randomMovie} />
            <span className="genres">{genresNames}</span>
            <RatingDisplay randomMovie={randomMovie} />
            <CastDisplay apiKey={apiKey} movieId={movieId} />
            <div className="overview">
              <span className="overview-text">{randomMovie.overview}</span>
            </div>
            <ActorsSlider movieId={movieId} apiKey={apiKey} />
          </div>
        </div>
      </div>
      <ToWatchAndStreamings />
    </>
  );
};
