import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import DashBoard from "../components/DashBoard/DashBoard";
import Advice from "../components/Advice/Advice";
import Signup from "../components/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <DashBoard />,
      },
      {
        path: "/home/advice",
        element: <Advice/>,
      },
    ],
  },
]);

export default router;
