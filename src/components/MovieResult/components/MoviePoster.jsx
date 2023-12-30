export const MoviePoster = ({ randomMovie }) => (
  <img
    alt="poster"
    className="poster-image"
    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${randomMovie.poster_path}`}
  />
);
