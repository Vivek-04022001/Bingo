import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QuestionsProvider } from "./context/shuffled.jsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionsProvider>
        <App />
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
