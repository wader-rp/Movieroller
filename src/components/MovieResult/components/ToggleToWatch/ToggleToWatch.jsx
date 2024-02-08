import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { DoubleRightOutlined } from "@ant-design/icons";

import "./ToggleToWatch.css";

export const ToggleToWatch = () => {
  const { toggleExpandedState } = useMovieResultContext();

  const handleToggleToWatchList = () => {
    toggleExpandedState(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="toggle-to-watch" onClick={handleToggleToWatchList}>
      <div className="arrow-wrapper">
        <DoubleRightOutlined className="arrow" />
      </div>

      <span className="text">TO WATCH LIST</span>
    </div>
  );
};
