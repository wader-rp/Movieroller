import { MovieResult } from "./components/MovieResult/MovieResult";
import { useContext, useEffect } from "react";
import { randomNumber } from "./helpers/randomPageGenerator";
import { FilterScreen } from "./components/FilterScreen/FilterScreen";
import { FiltersContext } from "./Contexts/FilterContext";
import { useAxios } from "./helpers/useAxios";

import "./index.css";
import { useMovieResultContext } from "./Contexts/ToWatchDisplayContext";

export const AppContent = () => {
  const {
    yearsRange: [startYear, endYear],
    genreIdsForUrl,
    includeAdult,
  } = useContext(FiltersContext);

  const { setActiveData, activeData } = useMovieResultContext();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const randomPage = randomNumber(30);
  const genreIdsJoined = genreIdsForUrl.join("|");
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;

  const { data: movieData, getData, resetData } = useAxios(url);

  useEffect(() => {
    setActiveData(movieData && movieData.results[randomNumber(20)]);
  }, [movieData, setActiveData]);

  const movieId = activeData && activeData.id;

  return (
    <div className="app-wrapper">
      {!movieData ? (
        <FilterScreen resetData={resetData} getData={getData} />
      ) : (
        <>
          {activeData ? (
            <MovieResult
              apiKey={API_KEY}
              movieId={movieId}
              resetData={resetData}
            />
          ) : (
            <span>Something went wrong, please try again!</span>
          )}
        </>
      )}
    </div>
  );
};
