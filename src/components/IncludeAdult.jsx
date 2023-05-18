import { Switch } from "antd";
import classNames from "classnames";
import React, { useContext } from "react";
import { FiltersContext } from "../contexts/FilterContext";

export const IncludeAdult = () => {
  const { includeAdult, setIncludeAdult } = useContext(FiltersContext);

  const adultContentSwitch = () => setIncludeAdult((prev) => !prev);

  return (
    <div className="adult-switch-spacing">
      <Switch
        unCheckedChildren={"Allow adult content"}
        checkedChildren={"Adult content"}
        checked={includeAdult}
        onChange={adultContentSwitch}
        className={classNames("adult-switch", {
          "adult-switch-checked": includeAdult,
        })}
      />
    </div>
  );
};
