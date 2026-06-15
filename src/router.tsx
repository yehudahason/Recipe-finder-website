import { createHashRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";

export const router = createHashRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
