import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RoutePaths from "./routes/RoutePaths";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/d3-test/">
      <RoutePaths />
    </BrowserRouter>
  </React.StrictMode>
);
