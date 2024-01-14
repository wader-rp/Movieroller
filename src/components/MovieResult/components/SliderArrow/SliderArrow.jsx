import "./SliderArrow.css";

export const SliderArrow = ({ direction, handleArrowClick }) => (
  <div
    className={
      direction === "left" ? "slider-arrow left" : "slider-arrow right"
    }
    onClick={() => handleArrowClick(direction)}
  >
    {direction === "left" ? "<" : ">"}
  </div>
);
