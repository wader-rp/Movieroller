import React from "react";
import "./streamingModuleStyles.css";

export const StreamingModule = ({ imgAlt, source, data }) => {
  return (
    <div className="streaming-module">
      <img alt={imgAlt} src={source} className="stream-icon" />
    </div>
  );
};
