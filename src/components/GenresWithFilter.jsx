import { useContext } from "react";
import "./styles.css";
import { genres } from "../data/MovieGenres";
import classNames from "classnames";
import { FiltersContext } from "../Contexts/FilterContext";

export const GenresWithFilter = () => {
  const { genreIdsForUrl, setGenreIdsForUrl, triggerGenre } =
    useContext(FiltersContext);

  return (
    <div className="genres-position">
      <div className="genres-bar">
        <div className="genres-buttons">
          {genres.map((genre) => (
            <GenreButton
              key={genre.name}
              name={genre.name}
              onClick={() => triggerGenre(genre.id)}
              isChecked={genreIdsForUrl.includes(genre.id)}
            />
          ))}
        </div>
        <button
          className="genre-button clear-button"
          onClick={() => setGenreIdsForUrl([])}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

const GenreButton = ({ name, onClick, isChecked }) => (
  <button
    onClick={onClick}
    className={classNames("genre-button", {
      "genre-button-checked": isChecked,
    })}
  >
    {name}
  </button>
);
