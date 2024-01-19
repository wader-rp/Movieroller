import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useSlider } from "../../../../helpers/useSlider";
import { ActorDisplayBox } from "../ActorDisplayBox/ActorDisplayBox";
import { SliderArrow } from "../SliderArrow/SliderArrow";

import "./ActorsSliderStyles.css";

export const ActorsSlider = ({ display }) => {
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();
  const { crewAndCast } = useMovieResultContext();

  return (
    <div className="actors-slider-container" ref={containerRef}>
      <SliderArrow direction={"left"} handleArrowClick={handleArrowClick} />
      <div
        className="actors-slider"
        style={{ left: containerShift }}
        ref={contentRef}
      >
        {crewAndCast?.cast.slice(0, 20).map((actor) => (
          <ActorDisplayBox key={actor.name} actor={actor} display={display} />
        ))}
      </div>
      <SliderArrow direction={"right"} handleArrowClick={handleArrowClick} />
    </div>
  );
};
