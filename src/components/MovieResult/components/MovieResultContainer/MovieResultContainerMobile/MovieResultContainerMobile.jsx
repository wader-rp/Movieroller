import React from "react";
import { MoviePoster } from "../../MoviePoster/MoviePoster";
import { MovieTitle } from "../../MovieTitle/MovieTitle";
import { AddMovieToWatchListButton } from "../../AddMovieToWatchListButton/AddMovieToWatchListButton";
import { Genres } from "../../Genres/Genres";
import { RatingDisplay } from "../../RatingDisplay/RatingDisplay";
import { CastDisplay } from "../../CastDisplay/CastDisplay";
import { Overview } from "../../Overwiev/Overview";
import { ActorsDropdown } from "../../ActorsDropdown/ActorsDropdown";

import "./MovieResultContainerMobile.css";

export const MovieResultContainerMobile = () => (
  <>
    <div className="movie-poster-and-info-wrapper">
      <MoviePoster />
      <div className="movie-info-wrapper">
        <MovieTitle />
        <AddMovieToWatchListButton />
        <Genres />
        <RatingDisplay />
        <CastDisplay />
      </div>
    </div>
    <Overview />
    <ActorsDropdown display={"dropdown"} />
  </>
);
