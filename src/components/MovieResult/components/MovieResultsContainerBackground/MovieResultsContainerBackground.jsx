import React from "react";
import { useWindowResize } from "helpers/useWindowResize";

import "./MovieResultContainerBackground.css";

export const MovieResultsContainerBackground = ({ posterPath, children }) => {
  const { isMobile } = useWindowResize();

  if (!isMobile) {
    return (
      <div
        className="movie-results-container-bg"
        style={{
          backgroundImage: `url(
    https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${posterPath}
  )`,
        }}
      >
        {children}
      </div>
    );
  }
  return children;
};
