import { useContext } from "react";
import { FiltersContext } from "Contexts/FilterContext";
import { Slider } from "antd";
import { getMarks } from "../../helpers/getMarks";

import "./YearsSlider.css";

export const YearsSlider = () => {
  const { setYearsRange, yearsRange } = useContext(FiltersContext);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
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
  );
};
