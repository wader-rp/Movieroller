import NavBar from "./components/NavBar";
import { GenresWithFilter } from "./components/CategoriesFilter";
import { MovieResult } from "./components/MovieResult";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { genres } from "./data/MovieGenres";

function App() {
  const [moviesDatabase, setMoviesDatabase] = useState(null);
  const [genreIdsForUrl, setGenreIdsForUrl] = useState([]);

  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const genreIdsJoined = genreIdsForUrl.join("|");
  console.log(genreIdsJoined);
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;
  console.log(genreIdsForUrl);
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
    });
  }, [genreIdsJoined]);

  const handleGetId = (e) => {
    if (genreIdsForUrl.includes(parseInt(e.target.id, 10))) {
      const id = genreIdsForUrl.indexOf(parseInt(e.target.id, 10));

      setGenreIdsForUrl((prev) => {
        let newArr = [...prev];
        newArr.splice(id, 1);
        return newArr;
      });
    } else {
      setGenreIdsForUrl((prev) => {
        return [...prev, parseInt(e.target.id, 10)];
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
