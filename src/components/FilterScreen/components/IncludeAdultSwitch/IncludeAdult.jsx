import { useContext } from "react";
import { Switch } from "antd";
import classNames from "classnames";
import { FiltersContext } from "../../../../Contexts/FilterContext";

import "./IncludeAdult.css";

export const IncludeAdult = () => {
  const { includeAdult, setIncludeAdult } = useContext(FiltersContext);

  const adultContentSwitch = () => setIncludeAdult((prev) => !prev);

  return (
    <div className="adult-switch-spacing">
      <Switch
        unCheckedChildren="Allow adult content"
        checkedChildren="Adult content"
        checked={includeAdult}
        onChange={adultContentSwitch}
        className={classNames("adult-switch", {
          "adult-switch-checked": includeAdult,
        })}
      />
    </div>
  );
};
