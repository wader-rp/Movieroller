import React from "react";
import { UpArrowStyled } from "./Arrow/UpArrowStyled";

import "./ToWatchAndStreamings.css";

export const ToWatchAndStreamings = ({ toggleToWatch }) => {
  return (
    <div className="footer-content">
      <div className="options" onClick={() => toggleToWatch((prev) => !prev)}>
        <UpArrowStyled />
        <span className="options-text">TO-WATCH LIST</span>
      </div>
      <div className="options">
        <UpArrowStyled />
        <span className="options-text">STREAMINGS</span>
      </div>
    </div>
  );
};
