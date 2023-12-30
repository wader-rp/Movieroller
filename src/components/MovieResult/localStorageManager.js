export const addMovieToToWatchList = (randomMovie, crewAndCast) => {
  const movieData = { ...randomMovie, ...crewAndCast };
  const currentStorage = JSON.parse(localStorage.getItem("toWatch") ?? "[]");

  if (currentStorage.find((movie) => movie.id !== randomMovie.id)) {
    localStorage.setItem(
      "toWatch",
      JSON.stringify([...currentStorage, movieData]),
    );
  }
};
