import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";

import "./Overview.css";

export const Overview = () => {
  const { activeData } = useMovieResultContext();

  return (
    <div className="overview">
      <span className="overview-text">{activeData?.overview}</span>
    </div>
  );
};
