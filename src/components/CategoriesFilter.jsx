import React from "react";
import "./styles.css";
import { genres } from "../data/MovieGenres";

export const GenresWithFilter = ({ handleGetId }) => {
  return (
    <div className="genres-bar">
      {genres.map((cat) => {
        return (
          <div key={cat.name}>
            <input
              type="checkbox"
              name="genre"
              id={cat.id}
              value={cat.name}
              onChange={handleGetId}
            />

            <div>{cat.name}</div>
          </div>
        );
      })}
    </div>
  );
};
