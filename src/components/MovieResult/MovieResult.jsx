import React, { useState, useEffect, useRef } from "react";
import "./movieResultStyles.css";
import { Rate } from "antd";
import { genres } from "../../data/MovieGenres";
import axios from "axios";

const singleShiftValue = 450;
const endOfContainerSwitchJustifyer = 63;

export const MovieResult = ({ randomMovie, movieId, apiKey }) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [containerShift, setContainerShift] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const randomMovieGenres = randomMovie && randomMovie.genre_ids;
  const genresNames = randomMovieGenres
    .map((id) => genres.find((genre) => genre.id === id).name)
    .join(" / ");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    axios.get(url).then((res) => {
      setCast(res.data.cast);
    });
  }, []);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`;
    axios.get(url).then((res) => {
      setCrew(res.data.crew);
    });
  }, []);

  console.log(cast);
  const handleArrowClick = (direction) => {
    switch (direction) {
      case "left":
        setContainerShift((currentShift) => {
          const newValue = currentShift + singleShiftValue;
          if (newValue >= 0) {
            return 0;
          }
          return currentShift + singleShiftValue;
        });

        break;
      case "right":
        setContainerShift((currentShift) => {
          const newValue = currentShift - singleShiftValue;
          const maxShift =
            -contentRef.current.offsetWidth +
            containerRef.current.offsetWidth -
            endOfContainerSwitchJustifyer;
          if (newValue < maxShift) {
            return maxShift;
          }

          return currentShift - singleShiftValue;
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="movie-results-container">
      <div className="movie-poster">
        <img
          alt={"poster"}
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w200${randomMovie.poster_path}`}
        />
      </div>
      <div className="movie-info">
        <div className="title-year-text">
          {`${randomMovie.title}\u00A0(${randomMovie.release_date.substring(
            0,
            4
          )})`}
        </div>
        <div className="genres">{genresNames}</div>
        <div className="movie-rating">
          <Rate
            disabled
            allowHalf
            count={10}
            value={randomMovie.vote_average}
            className="stars-rating"
          />
          <div>{`(${randomMovie.vote_count})`}</div>
        </div>

        <div className="overview">
          <div className="overview-text">{randomMovie.overview}</div>
        </div>

        <div className="actors-slider" ref={containerRef}>
          <div
            className="slider-arrow left"
            onClick={() => handleArrowClick("left")}
          >
            {"<"}
          </div>
          <div
            className="actors-slider-container"
            style={{ left: containerShift }}
            ref={contentRef}
          >
            {cast.slice(0, 20).map((actor) => {
              return (
                <div className="actor-box" key={actor.name}>
                  <img
                    alt="portrait"
                    className="actor-portrait"
                    src={
                      actor.profile_path
                        ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`
                        : "https://static8.depositphotos.com/1009634/988/v/450/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
                    }
                  />

                  <div className="actor-name">
                    <span className="actor-name-char name">{actor.name}</span>
                    <span className="actor-name-char char">
                      {actor.character}
                    </span>
                  </div>
                </div>
              );
            })}{" "}
          </div>
          <div
            className="slider-arrow right"
            onClick={() => handleArrowClick("right")}
          >
            {">"}
          </div>
        </div>
      </div>
      <div className="streamings"></div>
    </div>
  );
};
