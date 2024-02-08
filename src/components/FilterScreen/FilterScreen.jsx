import { Header } from "../Header/Header";
import { Description } from "./components/Description/Description";
import { GenresWithFilter } from "./components/GenresWithFilter/GenresWithFilter";
import { IncludeAdult } from "./components/IncludeAdultSwitch/IncludeAdult";
import { YearsSlider } from "./components/YearsSlider/YearsSlider";

import "./FilterScreenStyles.css";

export const FilterScreen = ({ resetData, getData }) => {
  return (
    <>
      <Header resetData={resetData} />
      <div className="filter-screen">
        <Description />
        <h4>Select movie categories</h4>
        <GenresWithFilter />
        <IncludeAdult />

        <h4>Select a range of years</h4>
        <YearsSlider />

        <button className="roll-button" onClick={getData}>
          ROLL!
        </button>
      </div>
    </>
  );
};
