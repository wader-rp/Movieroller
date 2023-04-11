import React from "react";
import "./toWatch.css";

export const ToWatchDisplay = ({ expanded }) => {
  return (
    <div className={expanded ? "grey-bg" : "hidden"}>
      <div className={expanded ? "to-watch" : "to-watch-hidden"}>ELO</div>
    </div>
  );
};
