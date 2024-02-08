import { createContext, useContext, useState } from "react";

export const MovieResultContext = createContext(null);

export const MovieResultContextProvider = ({ children }) => {
  const [activeData, setActiveData] = useState();
  const [expandedToWatchList, setExpandedToWatchList] = useState(false);
  const [crewAndCast, setCrewAndCast] = useState();

  const toggleExpandedState = (expanded) => {
    setExpandedToWatchList(expanded);
    document.body.style.overflow = expanded ? "hidden" : "auto";
  };

  return (
    <MovieResultContext.Provider
      value={{
        expandedToWatchList,
        activeData,
        setActiveData,
        crewAndCast,
        setCrewAndCast,
        toggleExpandedState,
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
