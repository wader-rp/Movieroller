import React from "react";
import disneyplusIcon from "../streamingsIcons/disneyPlus-icon.png";
import primeIcon from "../streamingsIcons/primeVideo-icon.png";
import appleIcon from "../streamingsIcons/apple-icon.png";
import netflixIcon from "../streamingsIcons/netflix-icon.png";
import hbomaxIcon from "../streamingsIcons/hboMax-icon.png";

import "./availableStreamings.css";
import { StreamingModule } from "./StreamingModule";

export const AvailableStreamingsDisplay = ({ availableStreamings }) => {
  console.log(availableStreamings);

  if (availableStreamings) {
    return (
      <div>
        {availableStreamings.prime ? (
          <StreamingModule
            imgAlt={"prime logo"}
            source={primeIcon}
            data={availableStreamings.prime}
          />
        ) : null}
        {availableStreamings.apple ? (
          <StreamingModule
            imgAlt={"apple logo"}
            source={appleIcon}
            data={availableStreamings.apple}
          />
        ) : null}
        {availableStreamings.disney ? (
          <StreamingModule
            imgAlt={"disney logo"}
            source={disneyplusIcon}
            data={availableStreamings.disney}
          />
        ) : null}
        {availableStreamings.hbo ? (
          <StreamingModule
            imgAlt={"hbomax logo"}
            source={hbomaxIcon}
            data={availableStreamings.hbo}
          />
        ) : null}
        {availableStreamings.netflix ? (
          <StreamingModule
            imgAlt={"netflix icon"}
            source={netflixIcon}
            data={availableStreamings.netflix}
          />
        ) : null}
      </div>
    );
  }
};
