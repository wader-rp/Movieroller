import React from "react";

import { StreamingModule } from "./StreamingModule";
import { getIcon } from "../../../../../helpers/getIcon";

import "./availableStreamings.css";

export const AvailableStreamingsDisplay = ({ availableStreamings }) => (
  <div className="streamings-position">
    {Object.entries(availableStreamings).map(([streamingName, dataArray]) => (
      <StreamingModule
        imgAlt={streamingName}
        source={getIcon(streamingName)}
        data={{ streamingName, dataArray }}
      />
    ))}
  </div>
);
