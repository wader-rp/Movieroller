import { useSlider } from "../../../../helpers/useSlider";
import { ActorDisplayBox } from "../ActorDisplay/ActorDisplayBox";
import { SliderArrow } from "../SliderArrow/SliderArrow";

import "./ActorsSliderStyles.css";

export const ActorsSlider = ({ crewAndCast }) => {
  const cast = crewAndCast.cast;
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();

  return (
    <div className="actors-slider-container" ref={containerRef}>
      <SliderArrow direction={"left"} handleArrowClick={handleArrowClick} />
      <div
        className="actors-slider"
        style={{ left: containerShift }}
        ref={contentRef}
      >
        {cast.slice(0, 20).map((actor) => (
          <ActorDisplayBox key={actor.name} actor={actor} />
        ))}
      </div>
      <SliderArrow direction={"right"} handleArrowClick={handleArrowClick} />
    </div>
  );
};
