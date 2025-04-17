import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import NotFound from "../pages/not-found";

const SignInRoute = lazy(() => import("../pages/sign-in"));
const HomeRoute = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/sign-in",
    element: <SignInRoute />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
