import React, { useEffect, useState } from "react";
import "./moviesToWatch.css";
import "../../movieResultStyles.css";
import { useSlider } from "../../../../helpers/useSlider";
import { useHover } from "../../../../helpers/useHover";
import { OnHoverIcons } from "./OnHoverIcons";

const getToWatchFromStorage = () =>
  JSON.parse(localStorage.getItem("toWatch") ?? "[]");

export const MoviesToWatch = ({ triggerExpand, expanded }) => {
  const [movies, setMovies] = useState(getToWatchFromStorage());
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  useEffect(() => {
    if (expanded) {
      setMovies(getToWatchFromStorage());
    }
  }, [expanded]);

  // const removeMovie = (index) => {
  //   const moviesCopy = [...movies];
  //   const splicedCopy = moviesCopy.filter((_, i) => i !== index);
  //   const strigifyCopy = JSON.stringify(splicedCopy);
  //   setMovies(splicedCopy);
  //   localStorage.setItem("toWatch", [strigifyCopy]);
  // };
  const { handleMouseOut, handleMouseOver, isHovering } = useHover();

  console.log(isHovering);
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
          {movies.map((movie, index) => {
            return (
              <div
                className="movie"
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                {/* <div
                  onClick={() => removeMovie(index)}
                  className="delete-button"
                >
                  X
                </div> */}
                <img
                  alt="x"
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                  className="movie-poster"
                />
                {isHovering.index === index && (
                  <OnHoverIcons
                    index={index}
                    movies={movies}
                    setMovies={setMovies}
                  />
                )}
                <span className="movie-title">{movie.title}</span>
              </div>
            );
          })}
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
          onClick={() => setMovies(getToWatchFromStorage())}
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
