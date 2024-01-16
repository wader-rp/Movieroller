import { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import { GenresWithFilter } from "../GenresWithFilter";
import { Slider } from "antd";
import { IncludeAdult } from "../IncludeAdult";
import { getMarks } from "./helpers";
import { FiltersContext } from "../../Contexts/FilterContext";
import "./FilterScreenStyles.css";

export const FilterScreen = ({ resetData, getData }) => {
  const { setYearsRange, yearsRange } = useContext(FiltersContext);

  return (
    <div>
      <Header resetData={resetData} />
      <div className="filter-screen">
        <div className="description">
          Hi! If you don't know what movie to watch today, this is the app for
          you. Just set the filters (or just let fate decide) and enjoy the
          random choice.
        </div>
        <h4>Select movie categories</h4>

        <GenresWithFilter />
        <IncludeAdult />

        <h4>Select a range of years</h4>

        <div className="slider-container">
          <Slider
            range
            marks={getMarks(yearsRange)}
            min={1935}
            max={2023}
            trackStyle={{ backgroundColor: "#685454" }}
            handleStyle={{ borderColor: "#685454" }}
            value={[yearsRange[0], yearsRange[1]]}
            onChange={setYearsRange}
          />
        </div>

        <button className="roll-button" onClick={getData}>
          ROLL!
        </button>
      </div>
    </div>
  );
};
