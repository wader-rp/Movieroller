import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { DoubleRightOutlined } from "@ant-design/icons";

import "./ToggleToWatch.css";

export const ToggleToWatch = () => {
  const { setExpandedToWatchList } = useMovieResultContext();

  const handleToggleToWatchList = () => {
    setExpandedToWatchList(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
