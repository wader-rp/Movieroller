import "./moviePosterStyled.css";

export const MoviePoster = ({ randomMovie }) => (
  <img
    className="movie-poster"
    alt="poster"
    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${randomMovie.poster_path}`}
  />
);
