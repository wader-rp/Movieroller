import React from "react";
import { Streamings } from "./Streamings";
import "./streamingsDisplay.css";

export const StreamingsDisplay = ({ expanded, triggerExpand, movieId }) => {
  return (
    <div className={expanded ? "grey-bg" : "hidden"}>
      <div className={expanded ? "streamings" : "streamings-hidden"}>
        <Streamings
          expanded={expanded}
          triggerExpand={triggerExpand}
          movieId={movieId}
        />
      </div>
    </div>
  );
};
