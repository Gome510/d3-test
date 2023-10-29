import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import Circle from "../pages/examples/Circle";
import Circles from "../pages/examples/Circles";
import Dashboard from "../pages/dashboard/Dashboard";
import EnterExit from "../pages/examples/EnterExit";

function RoutePaths() {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<Circle />} path="circle/" />
        <Route element={<Circles />} path="circles/" />
        <Route element={<Dashboard />} path="dashboard/" />
        <Route element={<EnterExit />} path="enter-exit/" />
      </Route>
    </Routes>
  );
}

export default RoutePaths;
