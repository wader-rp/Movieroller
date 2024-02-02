import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { ActorDisplayBox } from "../ActorDisplayBox/ActorDisplayBox";
import "./ActorsDropdown.css";

export const ActorsDropdown = ({ display }) => {
  const { crewAndCast } = useMovieResultContext();

  const cast = crewAndCast?.cast;

  return (
    <div className="actors-dropdown">
      {cast.slice(0, 20).map((actor) => (
        <ActorDisplayBox key={actor.name} actor={actor} display={display} />
      ))}
    </div>
  );
};
