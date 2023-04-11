import React, { useEffect, useState } from "react";
import "./moviesToWatch.css";

const getToWatchFromStorage = () =>
  JSON.parse(localStorage.getItem("toWatch") ?? "[]");

export const MoviesToWatch = ({ triggerExpand, expanded }) => {
  const [movies, setMovies] = useState(getToWatchFromStorage());

  useEffect(() => {
    if (expanded) {
      setMovies(getToWatchFromStorage());
    }
  }, [expanded]);

  const removeMovie = (index) => {
    const moviesCopy = [...movies];
    const splicedCopy = moviesCopy.filter((_, i) => i !== index);
    const strigifyCopy = JSON.stringify(splicedCopy);
    localStorage.setItem("toWatch", [strigifyCopy]);
  };

  console.log(movies);
  return (
    <div className="movies-to-watch-container">
      {movies.map((movie, index) => {
        return (
          <div className="movie" key={index}>
            <div onClick={() => removeMovie(index)} className="delete-button">
              X
            </div>
            <img
              alt="x"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              className="movie-poster"
            />
            <span>{movie.title}</span>
          </div>
        );
      })}
      <button onClick={triggerExpand} className="button"></button>
    </div>
  );
};
