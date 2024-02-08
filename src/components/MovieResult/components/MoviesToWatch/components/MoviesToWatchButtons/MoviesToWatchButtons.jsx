import React from "react";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

import "./MoviesToWatchButtons.css";

export const MoviesToWatchButtons = ({ setMovies }) => {
  const { toggleExpandedState } = useMovieResultContext();

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
        onClick={() => toggleExpandedState(false)}
        className="button-to-watch "
      >
        Exit
      </button>
    </div>
  );
};
