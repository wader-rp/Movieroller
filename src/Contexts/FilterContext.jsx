import React from "react";
import { useState, createContext } from "react";

export const FiltersContext = createContext(null);

export const FilterContextProvider = ({ children }) => {
  const [includeAdult, setIncludeAdult] = useState(false);
  const [fetchedMovies, setFetchedMovies] = useState(false);
  const [yearsRange, setYearsRange] = useState([1935, 2023]);
  const [genreIdsForUrl, setGenreIdsForUrl] = useState([]);

  const triggerGenre = (id) => {
    if (genreIdsForUrl.includes(id)) {
      const gId = genreIdsForUrl.indexOf(id);

      setGenreIdsForUrl((prev) => {
        let newArr = [...prev];
        newArr.splice(gId, 1);
        return newArr;
      });
    } else {
      setGenreIdsForUrl((prev) => {
        return [...prev, id];
      });
    }
  };

  return (
    <FiltersContext.Provider
      value={{
        includeAdult,
        setIncludeAdult,
        fetchedMovies,
        setFetchedMovies,
        yearsRange,
        setYearsRange,
        genreIdsForUrl,
        setGenreIdsForUrl,
        triggerGenre,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
