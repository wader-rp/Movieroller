import React from "react";
import { Outlet } from "react-router-dom/dist";
import NavBar from "../components/NavBar/NavBar";
import "../index.css";
export const RootLayout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
};
