import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import "./MovieTitle.css";

export const MovieTitle = () => {
  const { activeData } = useMovieResultContext();

  return (
    <span className="title-and-year">
      {`${activeData.title}\u00A0(${activeData.release_date.substring(0, 4)})`}
    </span>
  );
};
