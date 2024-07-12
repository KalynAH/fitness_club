import React from "react";
import ReactDOM from "react-dom/client";
import RoutineProvider from "./Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <RoutineProvider>
        <App />
      </RoutineProvider>
    </React.StrictMode>
  </BrowserRouter>
);
