import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { AccessToken } from "./context/AccessToken";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AccessToken>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AccessToken>
);
