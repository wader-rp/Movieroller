import "./SliderArrow.css";
import { clsx } from "clsx";

export const SliderArrow = ({ direction, handleArrowClick, disabled }) => {
  console.log(disabled);

  return (
    <div
      className={
        // direction === "left" ? "slider-arrow left" : "slider-arrow right"
        clsx("slider-arrow", direction, { disabled })
      }
      onClick={() => handleArrowClick(direction)}
    >
      {direction === "left" ? "<" : ">"}
    </div>
  );
};
