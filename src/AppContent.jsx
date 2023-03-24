import React from "react";
import NavBar from "./components/NavBar";
import { MovieResult } from "./components/MovieResult/MovieResult";
import axios from "axios";
import "./index.css";
import { useState, useContext } from "react";
import { randomNumber } from "./helpers/randomPageGenerator";
import FilterScreen from "./components/FilterScreen/FilterScreen";
import { FiltersContext } from "./Contexts/FilterContext";

export const AppContent = () => {
  const [movieData, setMovieData] = useState(null);

  const {
    fetchedMovies,
    setFetchedMovies,
    yearsRange,
    genreIdsForUrl,
    includeAdult,
  } = useContext(FiltersContext);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";

  const randomPage = randomNumber(200);
  const [startYear, endYear] = yearsRange;

  const getMovieData = () => {
    const genreIdsJoined = genreIdsForUrl.join("|");
    console.log(genreIdsJoined);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&page=&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;
    axios
      .get(url)
      .then((res) => {
        setMovieData(res.data);
      })
      .then(() => {
        setFetchedMovies(true);
      });
  };

  const randomMovie = movieData && movieData.results[randomNumber(20)];
  const movieId = randomMovie && randomMovie.id;

  return (
    <div className="app">
      <NavBar />

      {!fetchedMovies ? (
        <>
          <FilterScreen />

          <button className="roll-button" onClick={getMovieData}>
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
