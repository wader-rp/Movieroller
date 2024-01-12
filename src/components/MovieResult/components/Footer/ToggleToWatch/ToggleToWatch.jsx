import { UpArrowStyled } from "./Arrow/UpArrowStyled";

import "./ToggleToWatch.css";

export const ToggleToWatch = ({ toggleToWatch }) => (
  <div className="footer-content">
    <div className="options" onClick={() => toggleToWatch((prev) => !prev)}>
      <UpArrowStyled />
      <span className="options-text">TO-WATCH LIST</span>
    </div>
  </div>
);
