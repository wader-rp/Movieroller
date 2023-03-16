import React from "react";
import "./styles.css";
import { genres } from "../data/MovieGenres";
import classNames from "classnames";

export const GenresWithFilter = ({ handleGetId, genreIdsForUrl }) => {
  return (
    <div className="genres-cntr">
      <div className="genres-bar">
        {genres.map((genre) => (
          <GenreButton
            key={genre.name}
            name={genre.name}
            onClick={() => handleGetId(genre.id)}
            isChecked={genreIdsForUrl.includes(genre.id)}
          />
        ))}
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
