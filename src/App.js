import React, { lazy, Suspense } from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ErrorRoute from "./components/ErrorRoute";
import Restaurant from "./components/Restaurant";

const About = lazy(() => import("./components/About"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={<div>loading</div>}
            children={<About />}
          ></Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: (
          <Suspense
            fallback={<div>loading</div>}
            children={<Restaurant />}
          ></Suspense>
        ),
      },
    ],
    errorElement: <ErrorRoute />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
