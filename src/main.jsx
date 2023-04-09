import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/Home";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
