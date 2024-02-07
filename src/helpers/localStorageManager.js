import { toast } from "react-toastify";

export const addMovieToToWatchList = (randomMovie, crewAndCast) => {
  const movieData = { ...randomMovie, ...crewAndCast };
  const currentStorage = JSON.parse(localStorage.getItem("toWatch") ?? "[]");

  if (!currentStorage.some((movie) => movie.id === randomMovie.id)) {
    localStorage.setItem(
      "toWatch",
      JSON.stringify([...currentStorage, movieData])
    );
    toast.success(`${randomMovie.title} added to watch list`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.info("Movie already on list!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
