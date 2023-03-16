import React from "react";

export const MovieResult = ({ randomMovie }) => {
  return (
    <div>
      <div>{randomMovie.title}</div>
      <div>Year</div>
      <div>Categories</div>
      <div>Image</div>
    </div>
  );
};
