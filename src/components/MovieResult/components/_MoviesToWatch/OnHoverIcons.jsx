import "./moviesToWatch.css";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

export const OnHoverIcons = ({
  index,
  movies,
  setMovies,
  setActiveData,
  updateCrewAndCast,
  triggerExpand,
}) => {
  const removeMovie = (index) => {
    const moviesCopy = [...movies];
    const splicedCopy = moviesCopy.filter((_, i) => i !== index);
    const strigifyCopy = JSON.stringify(splicedCopy);
    setMovies(JSON.stringify(moviesCopy.filter((_, i) => i !== index)));
  };

  const handleMovieInfoDisplay = (index) => {
    const currentStorage = JSON.parse(localStorage.getItem("toWatch"));
    setActiveData(currentStorage[index]);
    updateCrewAndCast({
      cast: currentStorage[index].cast,
      crew: currentStorage[index].crew,
    });
  };
  //TODO: add info functionality , close after update.

  return (
    <div className="movie-icons">
      <div className="movie-icon-wrapper">
        <DeleteOutlined
          className="movie-icon"
          onClick={() => removeMovie(index)}
        />
        <p className="movie-icon-text">Delete</p>
      </div>
      <div className="movie-icon-wrapper">
        <InfoCircleOutlined
          className="movie-icon"
          onClick={() => handleMovieInfoDisplay(index)}
        />
        <p className="movie-icon-text">Info</p>
      </div>
    </div>
  );
};
