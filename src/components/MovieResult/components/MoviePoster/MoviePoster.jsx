import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./MoviePosterStyled.css";

export const MoviePoster = () => {
  const { activeData } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  return (
    <div
      className={
        !isMobile ? "movie-poster-wrapper" : "movie-poster-wrapper mobile"
      }
    >
      <img
        className={!isMobile ? "movie-poster" : "movie-poster mobile"}
        alt="poster"
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${activeData.poster_path}`}
      />
    </div>
  );
};
