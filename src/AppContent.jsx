import NavBar from "./components/NavBar";
import { MovieResult } from "./components/MovieResult/MovieResult";

import "./index.css";

import { useContext } from "react";
import { randomNumber } from "./helpers/randomPageGenerator";
import FilterScreen from "./components/FilterScreen/FilterScreen";
import { FiltersContext } from "./Contexts/FilterContext";
import { useAxios } from "./helpers/useAxios";

export const AppContent = () => {
  const {
    yearsRange: [startYear, endYear],
    genreIdsForUrl,
    includeAdult,
  } = useContext(FiltersContext);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  //TODO: extract it to .env
  const randomPage = randomNumber(30);
  const genreIdsJoined = genreIdsForUrl.join("|");
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&page=&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;

  const { data: movieData, getData, loading, error, resetData } = useAxios(url);
  //TODO: add loading and error components

  const randomMovie = movieData && movieData.results[randomNumber(20)];
  const movieId = randomMovie && randomMovie.id;

  return (
    <div className="app">
      <NavBar resetData={resetData} />

      {!movieData ? (
        <>
          <FilterScreen />

          <button className="roll-button" onClick={getData}>
            ROLL!
          </button>
        </>
      ) : (
        <div className="result-content">
          {randomMovie && (
            <MovieResult
              randomMovie={randomMovie}
              movieId={movieId}
              apiKey={apiKey}
            />
          )}
        </div>
      )}
    </div>
  );
};
