import React from "react";

export const MoviePoster = ({ randomMovie }) => {
  return (
    <img
      alt={"poster"}
      className="poster-image"
      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${randomMovie.poster_path}`}
    />
  );
};
