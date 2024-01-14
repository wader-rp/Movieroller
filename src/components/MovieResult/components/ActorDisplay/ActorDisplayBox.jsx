import "./ActorDisplayBoxStyles.css";

export const ActorDisplayBox = ({ actor }) => {
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
};
