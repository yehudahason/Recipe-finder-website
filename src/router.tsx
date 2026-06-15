import { createHashRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";

export const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/features",
        element: <Features />,
      },
    ],
  },
]);
