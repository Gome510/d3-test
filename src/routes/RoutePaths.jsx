import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Circle from "../pages/examples/Circle";
import Circles from "../pages/examples/Circles";
import App from "../App";

function RoutePaths() {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<Circle />} path="circle" />
        <Route element={<Circles />} path="circles" />
      </Route>
    </Routes>
  );
}

export default RoutePaths;
