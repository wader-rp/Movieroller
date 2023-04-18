import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SiderContext } from "antd/es/layout/Sider";

export const LocalStorageContext = createContext(null);

export const LocalStorageContextProvider = ({ children }) => {
  const [moviesToWatch, setMoviesToWatch] = useLocalStorage("toWatch", []);

  const addMovie = (movie) => {
    if (moviesToWatch.find((singleMovie) => singleMovie.id === movie.id))
      return;
    setMoviesToWatch([...moviesToWatch, movie]);
  };

  const removeMovie = (id) => {
    const moviesCopy = [...moviesToWatch];
    const newListOfMovies = moviesCopy.filter((movie) => movie.id !== id);
    setMoviesToWatch(newListOfMovies);
  };

  return (
    <LocalStorageContext.Provider
      value={{
        moviesToWatch,
        setMoviesToWatch,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};
