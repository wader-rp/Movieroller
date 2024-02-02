import { addMovieToToWatchList } from "helpers/localStorageManager";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

import "./AddMovieToWatchListButton.css";

export const AddMovieToWatchListButton = () => {
  const { activeData, crewAndCast } = useMovieResultContext();

  return (
    <div
      className="add-movie-to-watch-list-button"
      onClick={() => addMovieToToWatchList(activeData, crewAndCast)}
    >
      <PlusSquareOutlined className="add-to-watch" />
      <h5>Add to watch list</h5>
    </div>
  );
};