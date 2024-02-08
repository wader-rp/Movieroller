import { useEffect, useState } from "react";
import { useSlider } from "helpers/useSlider";
import { useMovieResultContext } from "Contexts/ToWatchDisplayContext";
import { SingleMovieCard } from "../SingleMovieCard/SingleMovieCard";
import { SliderArrow } from "components/MovieResult/components/SliderArrow/SliderArrow";
import { MoviesToWatchButtons } from "../MoviesToWatchButtons/MoviesToWatchButtons";

import "./MoviesToWatch.css";
import { useWindowResize } from "helpers/useWindowResize";

const getToWatchFromStorage = () => {
  const value = localStorage.getItem("toWatch");

  try {
    return !!value ? JSON.parse(localStorage.getItem("toWatch")) : [];
  } catch {
    new Error("Could not parse localStorage value");
    return [];
  }
};

export const MoviesToWatch = () => {
  const [movies, setMovies] = useState(getToWatchFromStorage);
  const { containerRef, contentRef, containerShift, handleArrowClick } =
    useSlider();
  const { expandedToWatchList } = useMovieResultContext();
  const { isMobile } = useWindowResize();

  useEffect(() => {
    if (expandedToWatchList) {
      setMovies(getToWatchFromStorage);
    }
  }, [expandedToWatchList]);

  const rightArrowDisabled =
    containerRef.current?.offsetWidth > contentRef.current?.offsetWidth;

  return (
    <div className="movies-to-watch-wrapper">
      <div className="movies-to-watch-container" ref={containerRef}>
        {contentRef.current?.offsetWidth > 650 && (
          <SliderArrow direction={"left"} handleArrowClick={handleArrowClick} />
        )}
        <div
          className="to-watch-slider"
          style={!isMobile ? { left: containerShift } : null}
          ref={contentRef}
        >
          {movies.map((movie, index) => (
            <SingleMovieCard
              key={movie.id}
              movies={movies}
              movie={movie}
              index={index}
              setMovies={setMovies}
              handleArrowClick={handleArrowClick}
            />
          ))}
        </div>
        {contentRef.current?.offsetWidth > 650 && (
          <SliderArrow
            direction={"right"}
            handleArrowClick={handleArrowClick}
            disabled={rightArrowDisabled}
          />
        )}
      </div>
      <MoviesToWatchButtons setMovies={setMovies} />
    </div>
  );
};
