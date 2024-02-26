// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ThemeProviderWrapper>
      <App />
    </ThemeProviderWrapper>
  </Router>
);