import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <Home />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
]);

export default router;
