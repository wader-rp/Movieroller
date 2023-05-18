import { Slider } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersContext } from "../../contexts/FilterContext";
import { randomNumber } from "../../helpers/randomPageGenerator";
import { useAxios } from "../../hooks/useAxios";
import { GenresWithFilter } from "../GenresWithFilter";
import { IncludeAdult } from "../IncludeAdult";
import "./filterScreenStyles.css";
import { getMarks } from "./helpers";

const FilterScreen = () => {
  const { setYearsRange, yearsRange, includeAdult, genreIdsForUrl } =
    useContext(FiltersContext);
  const apiKey = "63b99da2517b8f9e90eb5fe15729a57e";
  const navigate = useNavigate();
  const [startYear, endYear] = yearsRange;
  const genreIdsJoined = genreIdsForUrl.join("|");
  const tempDataUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;
  const { data: tempData, getData: getTempData } = useAxios();
  const { data: movieData, getData } = useAxios();

  useEffect(() => {
    if (tempData) {
      const randomPage = randomNumber(tempData.total_pages, 500);
      const movieDataUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=${includeAdult}&include_video=false&page=${randomPage}&primary_release_date.gte=${startYear}&primary_release_date.lte=${endYear}&with_genres=${genreIdsJoined}&with_watch_monetization_types=flatrate`;
      getData(movieDataUrl);
    }
  }, [tempData]);

  const randomMovie =
    movieData && movieData.results[randomNumber(movieData.results.length)];

  useEffect(() => {
    if (randomMovie) {
      navigate(`/${randomMovie.id}`);
    }
  }, [randomMovie]);

  return (
    <div className="filter-screen">
      {movieData?.results.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="description">
            Hi! If you don't know what movie to watch today, this is the app for
            you. Just set the filters (or just let fate decide) and enjoy the
            random choice.
          </div>
          <h1>Select movie categories</h1>

          <GenresWithFilter />
          <IncludeAdult />

          <h1>Select a range of years</h1>
          <div className="slider">
            <div className="slider-container">
              <Slider
                range
                marks={getMarks(yearsRange)}
                min={1935}
                max={2023}
                trackStyle={{ backgroundColor: "#685454" }}
                handleStyle={{ borderColor: "#685454" }}
                value={[yearsRange[0], yearsRange[1]]}
                onChange={(dates) => setYearsRange(dates)}
              />
            </div>
          </div>
          <button
            className="roll-button"
            onClick={() => getTempData(tempDataUrl)}
          >
            ROLL!
          </button>
        </>
      )}
    </div>
  );
};

export default FilterScreen;
