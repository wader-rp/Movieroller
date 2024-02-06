import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./Overview.css";

export const Overview = () => {
  const { activeData } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  return (
    <div className={!isMobile ? "overview" : "overview mobile"}>
      <span className="overview-text">{activeData?.overview}</span>
    </div>
  );
};
