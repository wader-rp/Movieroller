import React from "react";

export const MovieTitle = ({ randomMovie }) => {
  return (
    <div className="title-year-text">
      {`${randomMovie.title}\u00A0(${randomMovie.release_date.substring(
        0,
        4
      )})`}
    </div>
  );
};
