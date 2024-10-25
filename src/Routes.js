import { lazy } from "react";
import HomeLayout from "./Layout/home-layout/HomeLayout";
// import LoginLayout from "./Layout/login-layout/LoginLayout";

export const routes = [
  {
    path: "/",
    layout: HomeLayout,
    element: lazy(() => import("./pages/HomePage")),
  },

  {
    path: "/about",
    layout: HomeLayout,
    element: lazy(() => import("./pages/About")),
  },

  {
    path: "/services",
    layout: HomeLayout,
    element: lazy(() => import("./pages/Services")),
  },

  {
    path: "/contact",
    layout: HomeLayout,
    element: lazy(() => import("./pages/Contact")),
  },

  {
    path: "*",
    layout: HomeLayout,
    element: lazy(() => import("./componants/PageNotfound")),
  },
];
