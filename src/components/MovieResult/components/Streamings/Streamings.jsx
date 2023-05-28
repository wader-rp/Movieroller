import axios from "axios";
import React, { useEffect, useState } from "react";

import { countryCodes } from "./countryCodes";
import { AvailableStreamingsDisplay } from "./availableStreamings/AvailableStreamings";

import { Select } from "antd";
import "./streamings.css";
import "../../../../styles/buttons.css";

export const Streamings = ({ triggerExpand, movieId }) => {
  const [countryCode, setCountryCode] = useState("");
  const [availableStreamings, setavailableStreamings] = useState([]);

  const changeHandler = (value) => {
    setCountryCode(value);
  };

  useEffect(() => {
    if (countryCode) {
      const lowerCaseCountryCode = countryCode.toLowerCase();
      const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
      axios({
        method: "get",
        url: "https://streaming-availability.p.rapidapi.com/v2/get/basic",
        params: {
          country: lowerCaseCountryCode,
          tmdb_id: `movie/${movieId}`,
          output_language: "en",
        },
        headers: {
          "content-type": "application/octet-stream",
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      })
        .then((res) => {
          setavailableStreamings(
            res.data.result.streamingInfo[lowerCaseCountryCode]
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [countryCode, movieId]);

  return (
    <div className="streamings-wrapper">
      <div className="streamings-container">
        <div className="select-wrapper">
          <span className="select-text">Please select your country:</span>
          <Select
            className="country-select"
            popupClassName="country-select-popup"
            onChange={changeHandler}
            size="middle"
          >
            {countryCodes.map((country) => (
              <Select.Option key={country.value} value={country.value}>
                {country.label}
              </Select.Option>
            ))}
          </Select>
        </div>
        {availableStreamings && (
          <AvailableStreamingsDisplay
            availableStreamings={availableStreamings}
          />
        )}
      </div>
      <button onClick={triggerExpand} className="button">
        Exit
      </button>
    </div>
  );
};
