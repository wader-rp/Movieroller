import React from "react";
import NavBar from "./components/NavBar";
import { MovieResult } from "./components/MovieResult/MovieResult";
import axios from "axios";
import "./index.css";
import { useState, useEffect, useContext } from "react";
import { randomNumber } from "./helpers/randomPageGenerator";
import FilterScreen from "./components/FilterScreen/FilterScreen";
import { FiltersContext } from "./Contexts/FilterContext";

export const AppContent = () => {
  const [movieData, setMovieData] = useState(null);
  console.log(movieData);
  const {
    includeAdult,
    isFiltered,
    setIsFiltered,
    yearsRange,
    genreIdsForUrl,
  } = useContext(FiltersContext);
  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const genreIdsJoined = genreIdsForUrl.join("|");
  const randomPage = randomNumber(400);
  const [startYear, endYear] = yearsRange;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=${includeAdult}language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreIdsJoined}&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovieData(res.data);
    });
  }, [genreIdsJoined]);

  const randomMovie = movieData && movieData.results[randomNumber(20)];

  return (
    <div className="app">
      <NavBar />

      {!isFiltered ? (
        <>
          <FilterScreen />

          <button className="roll-button" onClick={() => setIsFiltered(true)}>
            ROLL!
          </button>
        </>
      ) : (
        <div className="result-content">
          {randomMovie && <MovieResult randomMovie={randomMovie} />}
        </div>
      )}
    </div>
  );
};
