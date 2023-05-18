import React from "react";
import { UpArrowStyled } from "./Arrow/UpArrowStyled";

import "./ToWatchAndStreamings.css";

export const ToWatchAndStreamings = ({ toggleToWatch, toggleStreamings }) => {
  return (
    <div className="footer-content">
      <div className="options" onClick={() => toggleToWatch((prev) => !prev)}>
        <UpArrowStyled />
        <span className="options-text">WATCH LIST</span>
      </div>
      <div
        className="options"
        onClick={() => toggleStreamings((prev) => !prev)}
      >
        <UpArrowStyled />
        <span className="options-text">STREAMINGS</span>
      </div>
    </div>
  );
};
