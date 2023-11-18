import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import ContactUs from "../Pages/ContactUs";
import Cart from "../Pages/Cart";
import Dashboard from "../Pages/Dashboard";
import Foods from "../Pages/Foods";
import OurMenu from "../Pages/OurMenu";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default Routers;
