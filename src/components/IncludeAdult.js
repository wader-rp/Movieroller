import React from "react";
import { Switch } from "antd";

export const IncludeAdult = ({ setIncludeAdult }) => {
  const onChange = (checked) => {
    checked ? setIncludeAdult(true) : setIncludeAdult(false);
  };

  return (
    <div>
      <div>Do you want to include adult content ?</div>
      <Switch onChange={onChange} />
    </div>
  );
};
