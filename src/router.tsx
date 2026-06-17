import { createHashRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";

export const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
