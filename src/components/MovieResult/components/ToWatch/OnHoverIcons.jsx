import { DeleteOutlined, InfoCircleOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageContext } from "../../../../contexts/LocalStorageContext";
import "./moviesToWatch.css";

export const OnHoverIcons = ({ id }) => {
  const { removeMovie } = useContext(LocalStorageContext);
  const navigate = useNavigate();

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
        <InfoCircleOutlined
          className="movie-icon"
          onClick={() => navigate(`/${id}`)}
        />
        <p className="movie-icon-text">Info</p>
      </div>
    </div>
  );
};
