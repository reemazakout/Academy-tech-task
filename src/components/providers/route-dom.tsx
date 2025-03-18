import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../../pages/home";
import Cart from "../../pages/cart";
import NotFound from "../../pages/not-found";
import Admin from "../../pages/admin";

// all routes in the app
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/admin", element: <Admin /> },
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function RouterDomProvider() {
  // render the router provider
  return <RouterProvider router={routes}></RouterProvider>;
}
