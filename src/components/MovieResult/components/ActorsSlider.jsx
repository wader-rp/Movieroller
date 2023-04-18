import React from "react";
import "../movieResultStyles.css";

import { useSlider } from "../../../hooks/useSlider";

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
        {cast.slice(0, 20).map((actor) => {
          return (
            <div
              className="actor-box"
              key={actor.name}
              style={{
                backgroundImage: actor.profile_path
                  ? `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path})`
                  : "url(https://static8.depositphotos.com/1009634/988/v/450/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg)",
              }}
            >
              <div className="actor-name">
                <span className="actor-name-char name">{actor.name}</span>
                <span className="actor-name-char char">{actor.character}</span>
              </div>
            </div>
          );
        })}
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
