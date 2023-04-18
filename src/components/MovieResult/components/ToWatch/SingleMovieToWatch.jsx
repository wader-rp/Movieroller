import React from "react";
import { useHover } from "../../../../hooks/useHover";
import { OnHoverIcons } from "./OnHoverIcons";

export const SingleMovieToWatch = ({ movie }) => {
  const { handleMouseOver, handleMouseOut, isHovering } = useHover();
  return (
    <div
      className="movie"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img
        alt="x"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
        className="movie-poster"
      />
      {isHovering && <OnHoverIcons id={movie.id} />}
      <span className="movie-title">{movie.title}</span>
    </div>
  );
};
