import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.scss";
import Home from "./routes/Home/Home.tsx";
import About from "./routes/About/About.tsx";
import Skills from "./routes/Skills/Skills.tsx";
import Works from "./routes/Works/Works.tsx";
import Contact from "./routes/Contact/Contact.tsx";
import Root from "./routes/Root/Root.tsx";
import Gallery from "./components/util/Gallery/Gallery.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dev",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
