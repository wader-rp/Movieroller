import { useMovieResultContext } from "../../../../../../Contexts/ToWatchDisplayContext";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";

import "./OnHoverIcons.css";

export const OnHoverIcons = ({
  index,
  movies,
  setMovies,
  handleArrowClick,
}) => {
  const { setActiveData, setCrewAndCast, toggleExpandedState } =
    useMovieResultContext();

  const removeMovie = (index) => {
    const moviesCopy = [...movies];
    const moviesWithRemovedIndex = moviesCopy.filter((_, i) => i !== index);
    setMovies(moviesWithRemovedIndex);
    localStorage.setItem("toWatch", JSON.stringify(moviesWithRemovedIndex));
    handleArrowClick("left");
  };

  const handleMovieInfoDisplay = (index) => {
    const currentStorage = JSON.parse(localStorage.getItem("toWatch"));
    setActiveData(currentStorage[index]);
    setCrewAndCast({
      cast: currentStorage[index].cast,
      crew: currentStorage[index].crew,
    });

    toggleExpandedState(false);
  };

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
