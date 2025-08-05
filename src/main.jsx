import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root.jsx";
import Home from "./Components/Pages/Home.jsx";
import EMICalculator from "./Components/HomeLayout/EmiCalculator.jsx";
import TransferPage from "./Components/HomeLayout/TransferPage.jsx";
import Register from "./Components/Pages/Register.jsx";
import Login from "./Components/Pages/Login.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import Profile from "./Components/Pages/Profile.jsx";
import Bills from "./Components/Pages/Bills.jsx";
import PrivateRoutes from "./Components/Routes/PrivateRoutes.jsx";
import BillDetail from "./Components/Pages/BillDetail.jsx";
import UpdateProfile from "./Components/Pages/UpdateProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bills",
        loader: () => fetch("/Bills.json"),
        element: (
          <PrivateRoutes>
            <Bills></Bills>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bill/:id",
        loader: () => fetch("/Bills.json"),
        element: (
          <PrivateRoutes>
            <BillDetail></BillDetail>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/LatestOffer/LearnMore",
    Component: EMICalculator,
  },
  {
    path: "/QuickActions/Transfer",
    Component: TransferPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
