import { clsx } from "clsx";

import "./SliderArrow.css";

export const SliderArrow = ({ direction, handleArrowClick, disabled }) => {
  return (
    <div
      className={clsx("slider-arrow", direction, { disabled })}
      onClick={() => handleArrowClick(direction)}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );
};
