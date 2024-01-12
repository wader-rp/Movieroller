import { useEffect } from "react";

import { genres } from "../../data/MovieGenres";
import { RatingDisplay } from "./components/RatingDisplay";
import { MoviePoster } from "./components/MoviePoster/MoviePoster";
import { ActorsSlider } from "./components/ActorsSliderContainer/ActorsSlider";
import { MovieTitle } from "./components/Title";
import { CastDisplay } from "./components/CastDisplay/CastDisplay";
import { useAxios } from "../../helpers/useAxios";

import "./movieResultStyles.css";

export const MovieResult = ({ randomMovie, movieId, apiKey }) => {
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
  const { data: crewAndCast, getData: getCrewAndCast } = useAxios(url);
  //TODO: add loader and error components

  useEffect(() => {
    getCrewAndCast();
  }, []);

  return (
    <div className="movie-results-container-wrapper">
      <div
        className="movie-results-container-bg"
        style={{
          backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${randomMovie.poster_path}
        )`,
        }}
      >
        <div className="movie-results-container">
          <div className="movie-poster-wrapper">
            <MoviePoster randomMovie={randomMovie} />
          </div>
          <div className="movie-info">
            <MovieTitle randomMovie={randomMovie} crewAndCast={crewAndCast} />
            <span className="genres">{genresNames}</span>
            <RatingDisplay randomMovie={randomMovie} />
            {crewAndCast && <CastDisplay crewAndCast={crewAndCast} />}
            <div className="overview">
              <span className="overview-text">{randomMovie.overview}</span>
            </div>
            {crewAndCast && <ActorsSlider crewAndCast={crewAndCast} />}
          </div>
        </div>
      </div>
    </div>
  );
};
