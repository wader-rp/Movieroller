import React from "react";
import "./streamingModuleStyles.css";

export const StreamingModule = ({ imgAlt, source, data }) => {
  console.log(data);
  return (
    <div className="streaming-module">
      <img alt={imgAlt} src={source} className="stream-icon" />
    </div>
  );
};
