import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { useWindowResize } from "helpers/useWindowResize";

import "./MovieTitle.css";

export const MovieTitle = () => {
  const { activeData } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  return (
    <span className={!isMobile ? "title-and-year" : "title-and-year mobile"}>
      {`${activeData.title}\u00A0(${activeData.release_date.substring(0, 4)})`}
    </span>
  );
};
