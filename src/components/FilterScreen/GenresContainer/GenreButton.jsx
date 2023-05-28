import classNames from "classnames";
import React from "react";
import "../../../styles/buttons.css";

export const GenreButton = ({ name, onClick, isChecked }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("genre-button", {
        "genre-button-checked": isChecked,
      })}
    >
      {name}
    </button>
  );
};
