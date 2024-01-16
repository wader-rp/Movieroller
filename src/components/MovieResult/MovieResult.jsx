import { useEffect } from "react";
import { Header } from "../Header/Header";
import { genres } from "../../data/MovieGenres";
import { MoviePoster } from "./components/MoviePoster/MoviePoster";
import { ActorsSlider } from "./components/ActorsSlider/ActorsSlider";
import { RatingDisplay } from "./components/RatingDisplay";
import { MovieTitle } from "./components/MovieTitle/MovieTitle";
import { CastDisplay } from "./components/CastDisplay/CastDisplay";
import { useAxios } from "../../helpers/useAxios";
import { ToggleToWatch } from "./components/ToggleToWatch/ToggleToWatch";
import { ToWatchDisplay } from "./components/MoviesToWatch/ToWatchDisplay";
import { useMovieResultContext } from "../../Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./MovieResultStyles.css";
import { ActorsDropdown } from "./components/ActorsDropdown/ActorsDropdown";
import { AddMovieToWatchListButton } from "./components/AddMovieToWatchListButton/AddMovieToWatchListButton";

export const MovieResult = ({ apiKey, movieId, resetData }) => {
  const { activeData, crewAndCast, setCrewAndCast } = useMovieResultContext();
  const { screenWidth } = useWindowResize();

  const randomMovieGenres = activeData && activeData.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
  const { data: fetchedCrewAndCast, getData: getCrewAndCast } = useAxios(url);
  //TODO: add loader and error components

  useEffect(() => {
    getCrewAndCast();
  }, []);

  useEffect(() => {
    setCrewAndCast(fetchedCrewAndCast);
  }, [fetchedCrewAndCast]);

  const actorsDisplay =
    crewAndCast && screenWidth > 992 ? (
      <ActorsSlider cast={crewAndCast?.cast} display={"slider"} />
    ) : (
      <ActorsDropdown cast={crewAndCast?.cast} display={"dropdown"} />
    );

  return (
    <>
      <Header resetData={resetData} />
      <div className="movie-results-container-wrapper">
        <div
          className="movie-results-container-bg"
          style={{
            backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${activeData.poster_path}
        )`,
          }}
        >
          <div className="movie-results-container">
            <MoviePoster activeData={activeData} />

            <div className="movie-info">
              <div className="movie-title-and-add-button--wrapper">
                <MovieTitle activeData={activeData} />
                <AddMovieToWatchListButton
                  activeData={activeData}
                  crewAndCast={crewAndCast}
                />
              </div>

              <span className="genres">{genresNames}</span>
              <RatingDisplay activeData={activeData} />
              {crewAndCast && <CastDisplay crewAndCast={crewAndCast} />}
              <div className="overview">
                <span className="overview-text">{activeData.overview}</span>
              </div>
              {crewAndCast && actorsDisplay}
            </div>
          </div>
        </div>
        <ToWatchDisplay />
      </div>
      <div className="toggle-to-watch">
        <ToggleToWatch />
      </div>
    </>
  );
};
