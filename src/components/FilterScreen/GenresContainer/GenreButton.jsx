import classNames from "classnames";
import React from "react";

export const GenreButton = ({ name, onClick, isChecked }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("genre-btn", {
        "genre-btn-checked": isChecked,
      })}
    >
      {name}
    </button>
  );
};
