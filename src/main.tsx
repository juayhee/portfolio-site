import React from "react";
import ReactDOM from "react-dom/client";
import "../index.scss";

import Gallery from "./components/util/Gallery/Gallery.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
);
