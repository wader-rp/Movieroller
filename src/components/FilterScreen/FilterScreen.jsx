import { useContext } from "react";
import { Header } from "../Header/Header";

import { GenresWithFilter } from "../GenresWithFilter";
import { Slider } from "antd";
import { IncludeAdult } from "../IncludeAdult";
import { getMarks } from "./helpers";
import "./FilterScreenStyles.css";
import { FiltersContext } from "../../Contexts/FilterContext";

export const FilterScreen = ({ resetData, getData }) => {
  const { setYearsRange, yearsRange } = useContext(FiltersContext);

  return (
    <div className="filter-screen">
      <Header resetData={resetData} />
      <div className="description">
        Hi! If you don't know what movie to watch today, this is the app for
        you. Just set the filters (or just let fate decide) and enjoy the random
        choice.
      </div>
      <h4>Select movie categories</h4>

      <GenresWithFilter />
      <IncludeAdult />

      <h4>Select a range of years</h4>
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
            onChange={setYearsRange}
          />
        </div>
      </div>
      <button className="roll-button" onClick={getData}>
        ROLL!
      </button>
    </div>
  );
};
