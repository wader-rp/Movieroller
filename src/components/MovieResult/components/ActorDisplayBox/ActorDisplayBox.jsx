import { clsx } from "clsx";
import "./ActorDisplayBoxStyles.css";

export const ActorDisplayBox = ({ actor, display }) => {
  return (
    <div
      className={clsx("actor-box", display)}
      key={actor.name}
      style={{
        backgroundImage: actor.profile_path
          ? `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path})`
          : "url(https://static8.depositphotos.com/1009634/988/v/450/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg)",
      }}
    >
      <div
        className={clsx("actor-name-and-char-container", {
          "actor-name-and-char-container--dropdown": display === "dropdown",
        })}
      >
        <span
          className={clsx("actor-name-char name", {
            "dropdown-name": display === "dropdown",
          })}
        >
          {actor.name}
        </span>
        <span
          className={clsx("actor-name-char char", {
            "dropdown-char": display === "dropdown",
          })}
        >
          {actor.character}
        </span>
      </div>
    </div>
  );
};
