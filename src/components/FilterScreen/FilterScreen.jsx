import React from "react";
import { GenresWithFilter } from "../GenresWithFilter";
import { Slider, Space } from "antd";
import { IncludeAdult } from "../IncludeAdult";
import { getMarks } from "./helpers";
import "./filterScreenStyles.css";

const FilterScreen = ({
  genreIdsForUrl,
  setGenreIdsForUrl,
  setYearsRange,
  setIncludeAdult,
  includeAdult,
  yearsRange,
}) => {
  const handleGetId = (id) => {
    if (genreIdsForUrl.includes(id)) {
      const gId = genreIdsForUrl.indexOf(id);

      setGenreIdsForUrl((prev) => {
        let newArr = [...prev];
        newArr.splice(gId, 1);
        return newArr;
      });
    } else {
      setGenreIdsForUrl((prev) => {
        return [...prev, id];
      });
    }
  };

  return (
    <div className="filter-screen">
      <div className="description">
        Hi! If you don't know what movie to watch today, this is the app for
        you. Just set the filters (or just let fade decide) and enjoy the random
        choice.
      </div>
      <h1>Select movie categories</h1>
      <GenresWithFilter
        handleGetId={handleGetId}
        genreIdsForUrl={genreIdsForUrl}
        setGenreIdsForUrl={setGenreIdsForUrl}
      />

      <IncludeAdult
        includeAdult={includeAdult}
        setIncludeAdult={setIncludeAdult}
      />
      <h1>Select a range of years</h1>
      <div className="slider">
        <div className="slider-container">
          <Slider
            range
            marks={getMarks(yearsRange)}
            min={1879}
            max={2023}
            trackStyle={{ backgroundColor: "#685454" }}
            handleStyle={{ borderColor: "#685454" }}
            value={[yearsRange[0], yearsRange[1]]}
            onChange={(dates) => setYearsRange(dates)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterScreen;
