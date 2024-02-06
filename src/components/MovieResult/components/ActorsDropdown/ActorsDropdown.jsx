import { useState, useRef, useEffect } from "react";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { ActorDisplayBox } from "../ActorDisplayBox/ActorDisplayBox";

import "./ActorsDropdown.css";

export const ActorsDropdown = ({ display }) => {
  const { crewAndCast } = useMovieResultContext();
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const cast = crewAndCast?.cast;

  const slicedCast = isExpanded ? cast.slice(0, 20) : cast.slice(0, 6);

  useEffect(() => {
    if (!isExpanded) {
      dropdownRef.current.scrollIntoView();
    }
    return;
  }, [isExpanded]);

  return (
    <div className="actors-dropdown-container">
      <div className="actors-dropdown" ref={dropdownRef}>
        {slicedCast.map((actor) => (
          <ActorDisplayBox key={actor.name} actor={actor} display={display} />
        ))}{" "}
      </div>
      <button onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
