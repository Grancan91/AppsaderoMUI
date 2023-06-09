import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import DashBoard from "../components/DashBoard/DashBoard";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <DashBoard/>,
      },
    ],
  },
]);

export default router;
