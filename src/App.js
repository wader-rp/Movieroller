import NavBar from "./components/NavBar";
import { MovieResult } from "./components/MovieResult";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { randomNumber, randomPage } from "./helpers/randomPageGenerator";
import { DatePicker, Space } from "antd";
import FilterScreen from "./components/FilterScreen";
const { RangePicker } = DatePicker;

function App() {
  const [movieData, setMovieData] = useState(null);
  const [genreIdsForUrl, setGenreIdsForUrl] = useState([]);
  const [includeAdult, setIncludeAdult] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [yearsRange, setYearsRange] = useState({
    startYear: 1960,
    endYear: 2023,
  });
  console.log(genreIdsForUrl);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const genreIdsJoined = genreIdsForUrl.join("|");
  const randomPage = randomNumber(400);
  const { startYear, endYear } = yearsRange;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=${includeAdult}language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreIdsJoined}&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovieData(res.data);
    });
  }, [genreIdsJoined]);

  const randomMovie = movieData && movieData.results[randomNumber(20)];

  return (
    <div className="app">
      <NavBar />

      {!isFiltered ? (
        <>
          <FilterScreen
            genreIdsForUrl={genreIdsForUrl}
            setGenreIdsForUrl={setGenreIdsForUrl}
            setYearsRange={setYearsRange}
            setIncludeAdult={setIncludeAdult}
          />

          <div>
            <button onClick={() => setIsFiltered(true)}>ROLL!</button>
          </div>
        </>
      ) : (
        <div>{randomMovie && <MovieResult randomMovie={randomMovie} />}</div>
      )}
    </div>
  );
}

export default App;
