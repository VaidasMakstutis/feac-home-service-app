import { Layout } from "./components/Layout/Layout";
import { AuthLayout } from "./components/Layout/AuthLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./router/consts";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { ErrorPage } from "./pages/ErrorPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { SearchCategory } from "./pages/SearchCategory";
import { UserProvider } from "./contexts/UserContext";

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

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
