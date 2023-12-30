import { PlusSquareOutlined } from "@ant-design/icons";
import { addMovieToToWatchList } from "../localStorageManager";

export const MovieTitle = ({ randomMovie, crewAndCast }) => (
  <div className="title-and-add">
    <div className="title-year-text">
      {`${randomMovie.title}\u00A0(${randomMovie.release_date.substring(
        0,
        4,
      )})`}
    </div>
    <div
      className="add-icon"
      onClick={() => addMovieToToWatchList(randomMovie, crewAndCast)}
    >
      <PlusSquareOutlined className="add-to-watch" />
      <h5>Add to watch list</h5>
    </div>
  </div>
);
