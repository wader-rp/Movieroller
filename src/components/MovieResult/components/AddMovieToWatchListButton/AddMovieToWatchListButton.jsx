import { addMovieToToWatchList } from "components/MovieResult/localStorageManager";
import { PlusSquareOutlined } from "@ant-design/icons";

import "./AddMovieToWatchListButton.css";

export const AddMovieToWatchListButton = ({ activeData, crewAndCast }) => (
  <div
    className="add-movie-to-watch-list-button"
    onClick={() => addMovieToToWatchList(activeData, crewAndCast)}
  >
    <PlusSquareOutlined className="add-to-watch" />
    <h5>Add to watch list</h5>
  </div>
);
