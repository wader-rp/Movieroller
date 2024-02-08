import { useRef } from "react";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./Overview.css";

export const Overview = () => {
  const { activeData } = useMovieResultContext();
  const { isMobile } = useWindowResize();
  const overviewRef = useRef(null);

  return (
    <div
      className={!isMobile ? "overview" : "overview mobile"}
      ref={overviewRef}
    >
      <span
        className="overview-text"
        style={
          overviewRef.current?.offsetHeight > 150
            ? { fontSize: "0.9rem" }
            : null
        }
      >
        {activeData?.overview}
      </span>
    </div>
  );
};
