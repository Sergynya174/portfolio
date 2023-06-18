import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
