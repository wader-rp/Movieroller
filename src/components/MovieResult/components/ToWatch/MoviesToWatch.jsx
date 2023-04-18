import React, { useContext } from "react";
import { useSlider } from "../../../../hooks/useSlider";
import "../../movieResultStyles.css";
import { SingleMovieToWatch } from "./SingleMovieToWatch";
import "./moviesToWatch.css";

import { LocalStorageContext } from "../../../../Contexts/LocalStorageContext";

export const MoviesToWatch = ({ triggerExpand, expanded }) => {
  const { moviesToWatch, setMoviesToWatch } = useContext(LocalStorageContext);
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  const handleClearAll = () => {
    setMoviesToWatch([]);
  };

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
          {moviesToWatch.map((movie) => {
            return (
              <SingleMovieToWatch
                key={movie.id}
                movie={movie}
                setMovies={setMoviesToWatch}
                movies={moviesToWatch}
              />
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
        <button onClick={handleClearAll} className="button-to-watch clear-all">
          Clear All
        </button>
        <button onClick={triggerExpand} className="button-to-watch exit">
          Exit
        </button>
      </div>
    </div>
  );
};
