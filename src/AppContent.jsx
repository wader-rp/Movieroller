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

  const { isFiltered, setIsFiltered, yearsRange, genreIdsForUrl } =
    useContext(FiltersContext);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";

  const randomPage = randomNumber(200);
  const [startYear, endYear] = yearsRange;

  const getMovieData = () => {
    const genreIdsJoined = genreIdsForUrl.join("|");
    console.log(genreIdsJoined);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=true&include_video=false&page=&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;
    axios.get(url).then((res) => {
      setMovieData(res.data);
    });
    console.log("POBIERAM");
  };
  const handleClick = () => {
    getMovieData();
    setIsFiltered(true);
  };
  const randomMovie = movieData && movieData.results[randomNumber(20)];
  const movieId = randomMovie && randomMovie.id;

  // useEffect(() => {
  //   const url2 = `
  //   https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
  //   axios.get(url2).then((res) => {
  //     setCredits(res);
  //   });
  // }, [movieId]);
  // console.log(credits);
  return (
    <div className="app">
      <NavBar />

      {!isFiltered ? (
        <>
          <FilterScreen />

          <button className="roll-button" onClick={handleClick}>
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
