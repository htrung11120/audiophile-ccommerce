import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { DataProvider } from "./contexts/DataContext.jsx";
import Home from "./Pages/Home.jsx";
import Headphones from "./Pages/Headphones.jsx";
import Speakers from "./Pages/Speakers.jsx";
import Earphones from "./Pages/Earphones.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import ItemDescription from "./components/ItemDescription.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Success from "./components/Success.jsx";

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
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      {
        path: "success",
        element: <Success />,
      },
    ],
  },
  ,
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
);
