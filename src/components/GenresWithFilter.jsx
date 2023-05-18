import classNames from "classnames";
import React, { useContext } from "react";
import { FiltersContext } from "../contexts/FilterContext";
import { allGenres } from "../data/movieGenres";
import "./styles.css";

export const GenresWithFilter = () => {
  const { genreIdsForUrl, setGenreIdsForUrl, triggerGenre } =
    useContext(FiltersContext);
  return (
    <div className="genres-position">
      <div className="genres-bar">
        {allGenres.map((genre) => (
          <GenreButton
            key={genre.name}
            name={genre.name}
            onClick={() => triggerGenre(genre.id)}
            isChecked={genreIdsForUrl.includes(genre.id)}
          />
        ))}
        <button
          className="genre-btn clear-button"
          onClick={() => setGenreIdsForUrl([])}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

const GenreButton = ({ name, onClick, isChecked }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("genre-btn", {
        "genre-btn-checked": isChecked,
      })}
    >
      {name}
    </button>
  );
};
