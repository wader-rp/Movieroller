import React, { useContext } from "react";
import { GenresWithFilter } from "../GenresWithFilter";
import { Slider } from "antd";
import { IncludeAdult } from "../IncludeAdult";
import { getMarks } from "./helpers";
import "./filterScreenStyles.css";
import { FiltersContext } from "../../Contexts/FilterContext";

const FilterScreen = () => {
  const { setYearsRange, yearsRange } = useContext(FiltersContext);

  return (
    <div className="filter-screen">
      <div className="description">
        Hi! If you don't know what movie to watch today, this is the app for
        you. Just set the filters (or just let fate decide) and enjoy the random
        choice.
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
