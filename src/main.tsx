import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NotFound from "./Pages/NotFound.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Settings from "./Pages/Settings.tsx";
import DirectMessages from "./Pages/DirectMessages.tsx";
import Servers from "./Pages/Servers.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dm",
        element: <DirectMessages />,
      },
      {
        path: "/server",
        element: <Servers />,
      },
    ],
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
