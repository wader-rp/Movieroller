import NavBar from "./components/NavBar";
import { GenresWithFilter } from "./components/CategoriesFilter";
import { MovieResult } from "./components/MovieResult";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { genres } from "./data/MovieGenres";
import { randomPage } from "./helpers/randomPageGenerator";

function App() {
  const [moviesDatabase, setMoviesDatabase] = useState(null);
  const [genreIdsForUrl, setGenreIdsForUrl] = useState([]);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const genreIdsJoined = genreIdsForUrl.join("|");
  console.log(randomPage);
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreIdsJoined}&page=${randomPage}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  }, [genreIdsJoined]);

  const handleGetId = (e) => {
    const targetIdToNumber = parseInt(e.target.id, 10);

    if (genreIdsForUrl.includes(targetIdToNumber)) {
      const id = genreIdsForUrl.indexOf(targetIdToNumber);

      setGenreIdsForUrl((prev) => {
        let newArr = [...prev];
        newArr.splice(id, 1);
        return newArr;
      });
    } else {
      setGenreIdsForUrl((prev) => {
        return [...prev, targetIdToNumber];
      });
    }
  };

  return (
    <div className="app">
      <NavBar />
      <GenresWithFilter handleGetId={handleGetId} />
      <div>
        <button>ROLL!</button>
      </div>
      <MovieResult />
    </div>
  );
}

export default App;
