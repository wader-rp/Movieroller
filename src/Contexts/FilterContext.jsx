import { useState, createContext } from "react";

export const FiltersContext = createContext(null);

export const FilterContextProvider = ({ children }) => {
  const [includeAdult, setIncludeAdult] = useState(false);
  const [yearsRange, setYearsRange] = useState([1935, 2023]);
  const [genreIdsForUrl, setGenreIdsForUrl] = useState([]);

  const triggerGenre = (id) => {
    setGenreIdsForUrl((prev) => {
      const genreIdIndex = genreIdsForUrl.indexOf(id);
      if (genreIdsForUrl.includes(id)) {
        let newArr = [...prev];
        newArr.splice(genreIdIndex, 1);
        return newArr;
      }
      return [...prev, id];
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        includeAdult,
        setIncludeAdult,
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
