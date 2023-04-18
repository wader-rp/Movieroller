import React, { useContext } from "react";
import "./moviesToWatch.css";
import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { LocalStorageContext } from "../../../../Contexts/LocalStorageContext";

export const OnHoverIcons = ({ id }) => {
  const { removeMovie } = useContext(LocalStorageContext);
  return (
    <div className="movie-icons">
      <div className="movie-icon-wrapper">
        <DeleteOutlined
          className="movie-icon"
          onClick={() => removeMovie(id)}
        />
        <p className="movie-icon-text">Delete</p>
      </div>
      <div className="movie-icon-wrapper">
        <InfoCircleOutlined className="movie-icon" />
        <p className="movie-icon-text">Info</p>
      </div>
    </div>
  );
};
