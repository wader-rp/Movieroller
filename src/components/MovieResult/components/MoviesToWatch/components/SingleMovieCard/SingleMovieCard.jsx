import { OnHoverIcons } from "../OnHoverToWatch/OnHoverIcons";
import { useHover } from "../../../../../../helpers/useHover";

import "./SingleMovieCard.css";

export const SingleMovieCard = ({
  movies,
  movie,
  index,
  setMovies,
  handleArrowClick,
}) => {
  const { handleMouseOut, handleMouseOver, isHovering } = useHover();

  return (
    <div
      className="movie"
      key={index}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
    >
      <img
        alt="movie-poster"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        className="movie-poster"
      />
      {isHovering.index === index && (
        <OnHoverIcons
          index={index}
          movies={movies}
          setMovies={setMovies}
          handleArrowClick={handleArrowClick}
        />
      )}
      <span className="movie-title">{movie.title}</span>
    </div>
  );
};
