import { useEffect, useState } from "react";
import { useSlider } from "../../../../helpers/useSlider";
import { useHover } from "../../../../helpers/useHover";
import { OnHoverIcons } from "./OnHoverIcons";

import "./moviesToWatch.css";

const getToWatchFromStorage = () =>
  JSON.parse(localStorage.getItem("toWatch") ?? "[]");

const handleClearAllMoviesFromStorage = (setMovies) => {
  localStorage.removeItem("toWatch");
  setMovies([]);
};

export const MoviesToWatch = ({
  triggerExpand,
  expanded,
  setActiveData,
  updateCrewAndCast,
}) => {
  const [movies, setMovies] = useState(getToWatchFromStorage());
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  useEffect(() => {
    if (expanded) {
      setMovies(getToWatchFromStorage());
    }
  }, [expanded]);

  const { handleMouseOut, handleMouseOver, isHovering } = useHover();

  return (
    <div className="movies-to-watch-wrapper">
      <div className="movies-to-watch-container" ref={containerRef}>
        <div
          className="slider-arrow left"
          onClick={() => handleArrowClick("left")}
        >
          {"<"}
        </div>
        <div
          className="to-watch-slider"
          style={{ left: containerShift }}
          ref={contentRef}
        >
          {movies.map((movie, index) => (
            <div
              className="movie"
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <img
                alt="movie-poster"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                className="movie-to-watch-poster"
              />
              {isHovering.index === index && (
                <OnHoverIcons
                  index={index}
                  movies={movies}
                  setMovies={setMovies}
                  setActiveData={setActiveData}
                  updateCrewAndCast={updateCrewAndCast}
                  triggerExpand={triggerExpand}
                />
              )}
              <span className="movie-title">{movie.title}</span>
            </div>
          ))}
        </div>
        <div
          className="slider-arrow right"
          onClick={() => handleArrowClick("right")}
        >
          {">"}
        </div>
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={() => handleClearAllMoviesFromStorage(setMovies)}
          className="button-to-watch clear-all"
        >
          Clear All
        </button>
        <button onClick={triggerExpand} className="button-to-watch exit">
          Exit
        </button>
      </div>
    </div>
  );
};
