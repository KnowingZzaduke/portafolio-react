import React from "react";
import { App } from "./App";
import "./scss/app.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Content } from "./routes/Content";
import { AllProjects } from "./routes/AllProjects";
import { Error } from "./Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/informacion",
        element: <Content />,
      },
      {
        path: "/proyectos",
        element: <AllProjects />
      },
    ],
  },
  {
    path: "*",
    element: <Error/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
