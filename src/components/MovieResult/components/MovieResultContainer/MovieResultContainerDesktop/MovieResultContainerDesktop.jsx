import React from "react";
import { MoviePoster } from "../../MoviePoster/MoviePoster";
import { MovieTitle } from "../../MovieTitle/MovieTitle";
import { AddMovieToWatchListButton } from "../../AddMovieToWatchListButton/AddMovieToWatchListButton";
import { RatingDisplay } from "../../RatingDisplay/RatingDisplay";
import { CastDisplay } from "../../CastDisplay/CastDisplay";
import { ActorsSlider } from "../../ActorsSlider/ActorsSlider";
import { Overview } from "../../Overwiev/Overview";
import { Genres } from "../../Genres/Genres";

import "./MovieResultContainerDesktop.css";

export const MovieResultContainerDesktop = () => (
  <>
    <MoviePoster />
    <div className="movie-info">
      <div className="movie-title-and-add-button--wrapper">
        <MovieTitle />
        <AddMovieToWatchListButton />
      </div>
      <Genres />
      <RatingDisplay />
      <CastDisplay />
      <Overview />
      <ActorsSlider display={"slider"} />
    </div>
  </>
);
