import React from "react";
import { GenresWithFilter } from "../GenresWithFilter";
import { Slider, Space } from "antd";
import { IncludeAdult } from "../IncludeAdult";
import { getMarks } from "./helpers";
import "../styles.css";

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
      <GenresWithFilter
        handleGetId={handleGetId}
        genreIdsForUrl={genreIdsForUrl}
      />
      <IncludeAdult
        includeAdult={includeAdult}
        setIncludeAdult={setIncludeAdult}
      />
      <div className="slider-container">
        <Slider
          range
          marks={getMarks(yearsRange)}
          min={1879}
          max={2023}
          value={[yearsRange[0], yearsRange[1]]}
          onChange={(dates) => setYearsRange(dates)}
        />
      </div>
    </div>
  );
};

export default FilterScreen;
