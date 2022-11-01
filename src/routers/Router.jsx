import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import OurLayout from "../components/layouts/OurLayout";
import AdminLayout from "../components/layouts/AdminLayout";
import Home from "../pages/pageHome/Home";
import Detail from "../pages/pageDetail/Detail";
import Login from "../pages/pageLogin/Login";
import Register from "../pages/pageRegister/Register";
import Admin from "../pages/pageAdmin/Admin";
import BookingTicket from "../pages/pageTicket/BookingTicket";
import DetailLayout from "../components/layouts/DetailLayout";
import TicketLayout from "../components/layouts/TicketLayout";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/",
      element: <TicketLayout />,
      children: [
        {
          path: "ticket/:id",
          element: <BookingTicket />,
        },
      ],
    },
    {
      path: "/",
      element: <OurLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "admin",
          element: <Admin />,
        },
      ],
    },
    {
      path: "/",
      element: <DetailLayout />,
      children: [
        {
          path: "detail/:movieIds",
          element: <Detail />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
