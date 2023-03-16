import React from "react";
import { GenresWithFilter } from "./GenresWithFilter";
import { DatePicker, Space } from "antd";
import { IncludeAdult } from "./IncludeAdult";
import "./styles.css";
const { RangePicker } = DatePicker;

const FilterScreen = ({
  genreIdsForUrl,
  setGenreIdsForUrl,
  setYearsRange,
  setIncludeAdult,
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

  const handleOnChange = (dates) => {
    const startDate = dates[0].year();
    const endDate = dates[1].year();
    setYearsRange({ startDate, endDate });
  };

  return (
    <div className="filter-screen">
      <GenresWithFilter
        handleGetId={handleGetId}
        genreIdsForUrl={genreIdsForUrl}
      />
      <IncludeAdult setIncludeAdult={setIncludeAdult} />
      <RangePicker picker="year" onChange={handleOnChange} />
    </div>
  );
};

export default FilterScreen;
