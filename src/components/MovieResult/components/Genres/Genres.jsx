import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { genres } from "data/MovieGenres";

import "./Genres.css";

export const Genres = () => {
  const { activeData } = useMovieResultContext();

  const randomMovieGenres = activeData && activeData.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");
  return <div className="genres"> {genresNames} </div>;
};
