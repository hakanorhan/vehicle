import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/* Includes all needed informations for internationalization */
import I18Initializer from "./I18Initializer.js";
import { I18nextProvider } from "react-i18next";

/* Roboto font-family */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={I18Initializer()}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
