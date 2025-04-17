import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import NotFound from "../pages/not-found";
import Layout from "../components/layout";

const SignInRoute = lazy(() => import("../pages/sign-in"));
const App = lazy(() => import("../App"));

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Layout,
      },
    ],
  },
  { path: "/sign-in", element: <SignInRoute /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
