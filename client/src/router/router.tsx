import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./consts";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Services } from "../pages/Services";
import { ErrorPage } from "../pages/ErrorPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { SearchCategory } from "../pages/SearchCategory";
import { Layout } from "../components/Layout/Layout";
import { AuthLayout } from "../components/Layout/AuthLayout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />
      }
    ]
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />
      }
    ]
  }
]);
