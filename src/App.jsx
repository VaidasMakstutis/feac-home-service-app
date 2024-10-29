import { Layout } from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./router/consts";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
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

  return <RouterProvider router={router} />;
}

export default App;
