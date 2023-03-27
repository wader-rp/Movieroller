import { useState, useEffect } from "react";
import axios from "axios";
import "./castDisplay.css";

export const CastDisplay = ({ movieId, apiKey }) => {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    axios.get(url).then((res) => {
      setCrew(res.data.crew);
    });
  }, []);

  const crewArr = crew.map((persons) => persons);
  console.log(crewArr);
  const directorName = crewArr.find((person) => person.job === "Director");
  const writerName = crewArr.find((person) => person.job === "Writer");
  const screenPlay = crewArr.find((person) => person.job === "Screenplay");

  return (
    <div className="cast-display-container">
      {directorName ? (
        <div>
          <span>{directorName.name}</span>

          <h5>Director</h5>
        </div>
      ) : null}
      {writerName ? (
        <div>
          <span>{writerName.name}</span>
          <h5>Writer</h5>
        </div>
      ) : null}
      {screenPlay ? (
        <div>
          <span>{screenPlay.name}</span>
          <h5>Screenplay</h5>
        </div>
      ) : null}
    </div>
  );
};
