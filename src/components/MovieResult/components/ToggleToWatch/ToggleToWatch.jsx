import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { DoubleRightOutlined } from "@ant-design/icons";

import "./ToggleToWatch.css";

export const ToggleToWatch = () => {
  const { setExpandedToWatchList } = useMovieResultContext();
  return (
    <div
      className="toggle-to-watch"
      onClick={() => setExpandedToWatchList((prev) => !prev)}
    >
      <div className="arrow-wrapper">
        <DoubleRightOutlined className="arrow" />
      </div>

      <span className="text">TO-WATCH LIST</span>
    </div>
  );
};
