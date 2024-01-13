import { PlusSquareOutlined } from "@ant-design/icons";
import { addMovieToToWatchList } from "../localStorageManager";

export const MovieTitle = ({ activeData, crewAndCast }) => (
  <div className="title-and-add">
    <div className="title-year-text">
      {`${activeData.title}\u00A0(${activeData.release_date.substring(0, 4)})`}
    </div>
    <div
      className="add-icon"
      onClick={() => addMovieToToWatchList(activeData, crewAndCast)}
    >
      <PlusSquareOutlined className="add-to-watch" />
      <h5>Add to watch list</h5>
    </div>
  </div>
);
