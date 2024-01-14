import { useEffect, useState } from "react";
import { useSlider } from "../../../../helpers/useSlider";
import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { SingleMovieCard } from "./SingleMovieCard/SingleMovieCard";
import { SliderArrow } from "../SliderArrow/SliderArrow";

import "./MoviesToWatch.css";

const getToWatchFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("toWatch"));
  } catch {
    new Error("Could not parse localStorage value");
    return [];
  }
};

const handleClearAllMoviesFromStorage = (setMovies) => {
  localStorage.removeItem("toWatch");
  setMovies([]);
};

export const MoviesToWatch = () => {
  const [movies, setMovies] = useState(getToWatchFromStorage);

  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  const { expandedToWatchList, setExpandedToWatchList } =
    useMovieResultContext();

  useEffect(() => {
    if (expandedToWatchList) {
      setMovies(getToWatchFromStorage);
    }
  }, [expandedToWatchList]);

  return (
    <div className="movies-to-watch-wrapper">
      <div className="movies-to-watch-container" ref={containerRef}>
        <SliderArrow direction={"left"} handleArrowClick={handleArrowClick} />
        <div
          className="to-watch-slider"
          style={{ left: containerShift }}
          ref={contentRef}
        >
          {movies.map((movie, index) => (
            <SingleMovieCard
              key={movie.id}
              movies={movies}
              movie={movie}
              index={index}
              setMovies={setMovies}
              handleArrowClick={handleArrowClick}
            />
          ))}
        </div>
        <SliderArrow direction={"right"} handleArrowClick={handleArrowClick} />
      </div>
      <div className="buttons-wrapper">
        <button
          onClick={() => handleClearAllMoviesFromStorage(setMovies)}
          className="button-to-watch "
        >
          Clear All
        </button>
        <button
          onClick={() => setExpandedToWatchList((prev) => !prev)}
          className="button-to-watch "
        >
          Exit
        </button>
      </div>
    </div>
  );
};
