import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
  },
  {
    path: "/about",
    element: <h1>Services</h1>,
  },
  {
    path: "/contact",
    element: <h1>My Profile</h1>,
  },
]);

export default router;
