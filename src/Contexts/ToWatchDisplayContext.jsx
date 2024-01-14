import { createContext, useContext, useState } from "react";

export const MovieResultContext = createContext(null);

export const MovieResultContextProvider = ({ children }) => {
  const [activeData, setActiveData] = useState();
  const [expandedToWatchList, setExpandedToWatchList] = useState(false);
  const [crewAndCast, setCrewAndCast] = useState();

  return (
    <MovieResultContext.Provider
      value={{
        expandedToWatchList,
        setExpandedToWatchList,
        activeData,
        setActiveData,
        crewAndCast,
        setCrewAndCast,
      }}
    >
      {children}
    </MovieResultContext.Provider>
  );
};

export const useMovieResultContext = () => {
  const context = useContext(MovieResultContext);

  if (!context) {
    throw new Error(
      "useMovieResultContext must be used within MovieResultContextProvider"
    );
  }
  return context;
};
