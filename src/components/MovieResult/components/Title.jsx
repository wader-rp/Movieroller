import { PlusSquareOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { LocalStorageContext } from "../../../contexts/LocalStorageContext";

export const MovieTitle = ({ randomMovie, crewAndCast }) => {
  const movieData = { ...randomMovie, ...crewAndCast };

  const { addMovie } = useContext(LocalStorageContext);

  return (
    <div className="title-and-add">
      <div className="title-year-text">
        {`${randomMovie.title}\u00A0(${randomMovie.release_date.substring(
          0,
          4
        )})`}
      </div>
      <div className="add-icon" onClick={() => addMovie(movieData)}>
        <PlusSquareOutlined className="add-to-watch" />
        <h5>{`Add to watch list`}</h5>
      </div>
    </div>
  );
};
