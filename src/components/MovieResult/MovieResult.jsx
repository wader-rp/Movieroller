import { useEffect } from "react";
import { Header } from "../Header/Header";
import { genres } from "../../data/MovieGenres";
import { MoviePoster } from "./components/MoviePoster/MoviePoster";
import { ActorsSlider } from "./components/ActorsSlider/ActorsSlider";
import { RatingDisplay } from "./components/RatingDisplay";
import { MovieTitle } from "./components/Title";
import { CastDisplay } from "./components/CastDisplay/CastDisplay";
import { useAxios } from "../../helpers/useAxios";
import { ToggleToWatch } from "./components/ToggleToWatch/ToggleToWatch";
import { ToWatchDisplay } from "./components/MoviesToWatch/ToWatchDisplay";
import { useMovieResultContext } from "../../Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./MovieResultStyles.css";

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
  console.log(screenWidth);
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
              <MovieTitle activeData={activeData} crewAndCast={crewAndCast} />
              <span className="genres">{genresNames}</span>
              <RatingDisplay activeData={activeData} />
              {crewAndCast && <CastDisplay crewAndCast={crewAndCast} />}
              <div className="overview">
                <span className="overview-text">{activeData.overview}</span>
              </div>
              {crewAndCast && <ActorsSlider crewAndCast={crewAndCast} />}
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
