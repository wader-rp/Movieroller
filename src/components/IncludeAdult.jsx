import React from "react";
import { Switch } from "antd";
import classNames from "classnames";

export const IncludeAdult = ({ setIncludeAdult, includeAdult }) => {
  const onChange = () => setIncludeAdult((prev) => !prev);

  return (
    <div>
      <Switch
        unCheckedChildren={"Adult content"}
        checkedChildren={"Adult content"}
        checked={includeAdult}
        onChange={onChange}
        className={classNames("adult-switch", {
          "adult-switch-checked": includeAdult,
        })}
      />
    </div>
  );
};
