import { MoviesToWatch } from "./MoviesToWatch";
import { useMovieResultContext } from "../../../../Contexts/ToWatchDisplayContext";

import "./ToWatch.css";

export const ToWatchDisplay = () => {
  const { expandedToWatchList } = useMovieResultContext();

  return (
    <div className={expandedToWatchList ? "grey-bg" : "hidden"}>
      <div className={expandedToWatchList ? "to-watch" : "to-watch-hidden"}>
        <MoviesToWatch />
      </div>
    </div>
  );
};
