import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AccessTokenProvider } from "./context/AccessTokenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AccessTokenProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AccessTokenProvider>
);
