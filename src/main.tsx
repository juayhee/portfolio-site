import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import Content from "./components/Content/Content.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
