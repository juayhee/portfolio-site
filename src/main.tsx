import React from "react";
import ReactDOM from "react-dom/client";
import "../index.scss";
import App from "./components/App/App.tsx";
import Gallery from "./components/util/Gallery/Gallery.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
