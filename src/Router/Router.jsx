import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/MainLayout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Phones from "../Pages/Phones/Phones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/phones",
        element: <Phones />
      },
    ]
  },
]);

export default router;
