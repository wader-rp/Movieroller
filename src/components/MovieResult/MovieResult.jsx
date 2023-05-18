import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ActorsSlider } from "./components/ActorsSlider";
import { CastDisplay } from "./components/CastDisplay/CastDisplay";
import { ToWatchAndStreamings } from "./components/Footer/ToWatchAndStreamings";
import { MoviePoster } from "./components/MoviePoster";
import { RatingDisplay } from "./components/RatingDisplay";
import { StreamingsDisplay } from "./components/Streamings/StreamingsDisplay";
import { MovieTitle } from "./components/Title";
import { ToWatchDisplay } from "./components/ToWatch/ToWatchDisplay/ToWatchDisplay";
import "./movieResultStyles.css";

export const MovieResult = () => {
  const [displayToWatchList, setDisplayToWatchList] = useState(false);
  const [displayStreamings, setDisplayStreamings] = useState(false);

  const data = useLoaderData();

  const { movieDetails, crewAndCast } = data;
  useEffect(() => {
    setDisplayToWatchList(false);
    setDisplayStreamings(false);
  }, [movieDetails, crewAndCast]);

  if (!movieDetails || !crewAndCast) return <div>Loading...</div>;
  const movieGenres =
    movieDetails && movieDetails.genres.map((genre) => genre.name).join(" / ");
  const movieId = movieDetails && movieDetails.id;
  return (
    <>
      <div>
        <div
          className="movie-results-container-bg"
          style={{
            backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetails.poster_path}
        )`,
          }}
        >
          <div className="movie-results-container">
            <div className="movie-results-poster">
              <MoviePoster randomMovie={movieDetails} />
            </div>
            <div className="movie-info">
              <MovieTitle
                randomMovie={movieDetails}
                crewAndCast={crewAndCast}
              />
              <span className="genres">{movieGenres}</span>
              <RatingDisplay randomMovie={movieDetails} />
              {crewAndCast && <CastDisplay crewAndCast={crewAndCast} />}
              <div className="overview">
                <span className="overview-text">{movieDetails.overview}</span>
              </div>
              {crewAndCast && <ActorsSlider crewAndCast={crewAndCast} />}
            </div>
          </div>
        </div>
      </div>
      <ToWatchDisplay
        expanded={displayToWatchList}
        triggerExpand={() => setDisplayToWatchList((prev) => !prev)}
      />
      <StreamingsDisplay
        expanded={displayStreamings}
        triggerExpand={() => setDisplayStreamings((prev) => !prev)}
        movieId={movieId}
      />
      <ToWatchAndStreamings
        toggleToWatch={setDisplayToWatchList}
        toggleStreamings={setDisplayStreamings}
      />
    </>
  );
};

export const movieLoader = async ({ params }) => {
  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`;
  const crewAndCastUrl = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}&language=en-US`;

  const movieDetailsResponse = await fetch(movieDetailsUrl);
  const movieDetails = await movieDetailsResponse.json();
  const crewAndCastResponse = await fetch(crewAndCastUrl);
  const crewAndCast = await crewAndCastResponse.json();

  return { movieDetails, crewAndCast };
};
