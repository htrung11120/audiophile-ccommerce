import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { AppProvider } from "./contexts/DataContext.jsx";
import Home from "./Pages/Home.jsx";
import Headphones from "./Pages/Headphones.jsx";
import Speakers from "./Pages/Speakers.jsx";
import Earphones from "./Pages/Earphones.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import ItemDescription from "./components/ItemDescription.jsx";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "headphones",
    element: <Headphones />,
  },
  {
    path: "speakers",
    element: <Speakers />,
  },
  {
    path: "earphones",
    element: <Earphones />,
  },

  {
    path: "detail",
    element: <ItemDetail />,
    children: [
      {
        path: ":item",
        element: <ItemDescription />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
