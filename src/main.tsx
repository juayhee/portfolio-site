import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.scss";
import Home from "./components/Home/Home.tsx";
import Gallery from "./components/util/Gallery/Gallery.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "skills",
    element: <div>Skills</div>,
  },
  {
    path: "works",
    element: <div>Works</div>,
  },
  {
    path: "contact",
    element: <div>Contact</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
