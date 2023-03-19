import React from "react";
import { useState, createContext } from "react";

export const FiltersContext = createContext(null);

export const FilterContextProvider = ({ children }) => {
  const [includeAdult, setIncludeAdult] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [yearsRange, setYearsRange] = useState([1879, 2023]);
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
        isFiltered,
        setIsFiltered,
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
