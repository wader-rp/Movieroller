import "./actorsSliderStyles.css";

import { useSlider } from "../../../../helpers/useSlider";
import { ActorDisplayBox } from "../ActorDisplay/ActorDisplayBox";

export const ActorsSlider = ({ crewAndCast }) => {
  const cast = crewAndCast.cast;
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  return (
    <div className="actors-slider-container" ref={containerRef}>
      <div
        className="slider-arrow left"
        onClick={() => handleArrowClick("left")}
      >
        {"<"}
      </div>
      <div
        className="actors-slider"
        style={{ left: containerShift }}
        ref={contentRef}
      >
        {cast.slice(0, 20).map((actor) => (
          <ActorDisplayBox key={actor.name} actor={actor} />
        ))}
      </div>
      <div
        className="slider-arrow right"
        onClick={() => handleArrowClick("right")}
      >
        {">"}
      </div>
    </div>
  );
};
