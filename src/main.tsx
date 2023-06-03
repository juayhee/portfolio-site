import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import HomeSkills from "./components/HomeSkills/HomeSkills.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomeSkills />
  </React.StrictMode>
);
