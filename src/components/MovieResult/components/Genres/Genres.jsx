import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { genres } from "data/MovieGenres";
import { useWindowResize } from "helpers/useWindowResize";

import "./Genres.css";

export const Genres = () => {
  const { activeData } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  const randomMovieGenres = activeData && activeData.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");
  return (
    <div className={isMobile ? "genres mobile" : "genres"}> {genresNames} </div>
  );
};
