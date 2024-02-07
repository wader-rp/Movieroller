import React from "react";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

import "./MoviesToWatchButtons.css";

export const MoviesToWatchButtons = ({ setMovies }) => {
  const { setExpandedToWatchList } = useMovieResultContext();

  const handleClearAllMoviesFromStorage = (setMovies) => {
    localStorage.removeItem("toWatch");
    setMovies([]);
  };

  return (
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
  );
};
