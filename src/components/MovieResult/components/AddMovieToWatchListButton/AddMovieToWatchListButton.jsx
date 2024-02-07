import { addMovieToToWatchList } from "helpers/localStorageManager";
import { PlusSquareOutlined } from "@ant-design/icons";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./AddMovieToWatchListButton.css";

export const AddMovieToWatchListButton = () => {
  const { activeData, crewAndCast } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  return (
    <div
      className={
        !isMobile
          ? "add-movie-to-watch-list-button"
          : "add-movie-to-watch-list-button mobile"
      }
      onClick={() => addMovieToToWatchList(activeData, crewAndCast)}
    >
      <PlusSquareOutlined />
      <h5>Add to watch list</h5>
    </div>
  );
};
