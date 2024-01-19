import { ActorDisplayBox } from "../ActorDisplayBox/ActorDisplayBox";
import "./ActorsDropdown.css";

export const ActorsDropdown = ({ cast, display }) => {
  return (
    <div className="actors-dropdown">
      {cast.slice(0, 20).map((actor) => (
        <ActorDisplayBox key={actor.name} actor={actor} display={display} />
      ))}
    </div>
  );
};
