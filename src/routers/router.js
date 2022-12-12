import MainLayoutRoute from '../layout/main-layout'
import Landingv2 from "../pages/Landingv2";
import Contact from "../pages/Contact";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutRoute />,
    children: [
      {
        index: true,
        element: <Landingv2 />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);
