import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

import "./MoviePosterStyled.css";

export const MoviePoster = () => {
  const { activeData } = useMovieResultContext();

  return (
    <div className="movie-poster-wrapper">
      <img
        className="movie-poster"
        alt="poster"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${activeData.poster_path}`}
      />
    </div>
  );
};
