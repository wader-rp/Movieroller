import { useEffect, useState } from "react";

import { genres } from "../../data/MovieGenres";
import { MoviePoster } from "./components/_MoviePoster/MoviePoster";
import { ActorsSlider } from "./components/_ActorsSlider/ActorsSlider";
import { RatingDisplay } from "./components/RatingDisplay";
import { MovieTitle } from "./components/Title";
import { CastDisplay } from "./components/_CastDisplay/CastDisplay";
import { useAxios } from "../../helpers/useAxios";
import { ToggleToWatch } from "./components/_ToggleToWatch/ToggleToWatch";
import "./movieResultStyles.css";
import { ToWatchDisplay } from "./components/_MoviesToWatch/ToWatchDisplay";

export const MovieResult = ({ randomMovie, movieId, apiKey }) => {
  const [displayToWatchList, setDisplayToWatchList] = useState(false);
  const [activeData, setActiveData] = useState(randomMovie);
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
  const {
    data: crewAndCast,
    getData: getCrewAndCast,
    setData: updateCrewAndCast,
  } = useAxios(url);
  //TODO: add loader and error components

  useEffect(() => {
    getCrewAndCast();
  }, []);
  console.log(crewAndCast);
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
            <MoviePoster activeData={activeData} />
          </div>
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
      <ToWatchDisplay
        expanded={displayToWatchList}
        triggerExpand={() => setDisplayToWatchList((prev) => !prev)}
        setActiveData={setActiveData}
        updateCrewAndCast={updateCrewAndCast}
      />
      <ToggleToWatch toggleToWatch={setDisplayToWatchList} />
    </div>
  );
};
