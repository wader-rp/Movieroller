import { useEffect } from "react";
import { Header } from "../Header/Header";
import { useAxios } from "../../helpers/useAxios";
import { ToggleToWatch } from "./components/ToggleToWatch/ToggleToWatch";
import { ToWatchDisplay } from "./components/MoviesToWatch/ToWatchDisplay";
import { useMovieResultContext } from "../../Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";
import { MovieResultsContainerBackground } from "./components/MovieResultsContainerBackground/MovieResultsContainerBackground";
import { MovieResultContainerDesktop } from "./components/MovieResultContainer/MovieResultContainerDesktop/MovieResultContainerDesktop";
import { MovieResultContainerMobile } from "./components/MovieResultContainer/MovieResultContainerMobile/MovieResultContainerMobile";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./MovieResultStyles.css";

export const MovieResult = ({ apiKey, movieId, resetData }) => {
  const { activeData, crewAndCast, setCrewAndCast } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
  const { data: fetchedCrewAndCast, getData: getCrewAndCast } = useAxios(url);

  useEffect(() => {
    getCrewAndCast();
  }, []);

  useEffect(() => {
    setCrewAndCast(fetchedCrewAndCast);
  }, [fetchedCrewAndCast]);

  return (
    <>
      <Header resetData={resetData} />
      <div
        className={
          !isMobile
            ? "movie-results-container-wrapper"
            : "movie-results-container-wrapper mobile"
        }
      >
        <MovieResultsContainerBackground posterPath={activeData.poster_path}>
          <div
            className={
              !isMobile
                ? "movie-results-container"
                : "movie-results-container mobile"
            }
          >
            {crewAndCast &&
              (!isMobile ? (
                <MovieResultContainerDesktop />
              ) : (
                <MovieResultContainerMobile />
              ))}
          </div>
        </MovieResultsContainerBackground>
      </div>
      <ToWatchDisplay />
      <div className="toggle-to-watch-wrapper">
        <ToggleToWatch />
      </div>

      <ToastContainer />
    </>
  );
};
