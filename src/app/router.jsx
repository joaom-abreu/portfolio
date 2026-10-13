import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/RootLayout/RootLayout.jsx";
import DesignPage from "@/pages/DesignPage/DesignPage.jsx";
import HomePage from "@/pages/HomePage.jsx";
import { ROUTES } from "@/shared/lib/routes.js";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.design, element: <DesignPage /> },
      { path: "*", element: <Navigate to={ROUTES.home} replace /> },
    ],
  },
]);
