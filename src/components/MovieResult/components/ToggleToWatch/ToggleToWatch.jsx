import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";
import { UpArrowStyled } from "./Arrow/UpArrowStyled";

import "./ToggleToWatch.css";

export const ToggleToWatch = () => {
  const { setExpandedToWatchList } = useMovieResultContext();
  return (
    <div className="footer-content">
      <div
        className="options"
        onClick={() => setExpandedToWatchList((prev) => !prev)}
      >
        <UpArrowStyled />
        <span className="options-text">TO-WATCH LIST</span>
      </div>
    </div>
  );
};
