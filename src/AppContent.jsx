import { useState } from "react";
import Header from "./components/Header/Header";
import { MovieResult } from "./components/MovieResult/MovieResult";
import { useContext } from "react";
import { randomNumber } from "./helpers/randomPageGenerator";
import FilterScreen from "./components/FilterScreen/FilterScreen";
import { FiltersContext } from "./Contexts/FilterContext";
import { useAxios } from "./helpers/useAxios";
import { ToWatchDisplay } from "./components/MovieResult/components/ToWatch/MoviesToWatch/ToWatchDisplay";
import { ToggleToWatch } from "./components/MovieResult/components/Footer/ToggleToWatch/ToggleToWatch";

import "./index.css";

export const AppContent = () => {
  const {
    yearsRange: [startYear, endYear],
    genreIdsForUrl,
    includeAdult,
  } = useContext(FiltersContext);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const randomPage = randomNumber(30);
  const genreIdsJoined = genreIdsForUrl.join("|");
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&page=&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;

  const { data: movieData, getData, resetData } = useAxios(url);

  const randomMovie = movieData && movieData.results[randomNumber(20)];
  const movieId = randomMovie && randomMovie.id;
  const [displayToWatchList, setDisplayToWatchList] = useState(false);
  return (
    <div className="app">
      <Header resetData={resetData} />

      {!movieData ? (
        <>
          <FilterScreen />

          <button className="roll-button" onClick={getData}>
            ROLL!
          </button>
        </>
      ) : (
        <div className="result-content">
          {randomMovie ? (
            <>
              <MovieResult
                randomMovie={randomMovie}
                movieId={movieId}
                apiKey={API_KEY}
              />{" "}
              <ToWatchDisplay
                expanded={displayToWatchList}
                triggerExpand={() => setDisplayToWatchList((prev) => !prev)}
              />
              <ToggleToWatch toggleToWatch={setDisplayToWatchList} />
            </>
          ) : (
            <span>Something went wrong, please try again!</span>
          )}
        </div>
      )}
    </div>
  );
};
