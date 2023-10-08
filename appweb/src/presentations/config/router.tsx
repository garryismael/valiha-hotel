import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/base-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
  },
]);

export default router;
