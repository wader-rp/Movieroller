import "./castDisplay.css";

export const CastDisplay = ({ crewAndCast }) => {
  const crew = crewAndCast.crew;
  const crewArr = crew.map((persons) => persons);

  const directorName = crewArr.find((person) => person.job === "Director");
  const writerName = crewArr.find((person) => person.job === "Writer");
  const screenPlay = crewArr.find((person) => person.job === "Screenplay");

  return (
    <div className="cast-display-container">
      {directorName ? (
        <div>
          <span className="cast-names">{directorName.name}</span>

          <h5>Director</h5>
        </div>
      ) : null}
      {writerName ? (
        <div>
          <span className="cast-names">{writerName.name}</span>
          <h5>Writer</h5>
        </div>
      ) : null}
      {screenPlay ? (
        <div>
          <span className="cast-names">{screenPlay.name}</span>
          <h5>Screenplay</h5>
        </div>
      ) : null}
    </div>
  );
};
