import React from "react";

import "./MovieResultContainerBackground.css";
import { useWindowResize } from "helpers/useWindowResize";

export const MovieResultsContainerBackground = ({ posterPath, children }) => {
  const { screenWidth } = useWindowResize();
  console.log(children);
  if (screenWidth > 1440) {
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
