import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import OurLayout from "../components/layouts/OurLayout";
import Home from "../pages/pageHome/Home";
import Detail from "../pages/pageDetail/Detail";
import Register from "../pages/pageRegister/Register";
import BookingTicket from "../pages/pageTicket/BookingTicket";
import DetailLayout from "../components/layouts/DetailLayout";
import TicketLayout from "../components/layouts/TicketLayout";
import Dashborad from "../pages/pageAdmin/Dashborad";
import AdminLayout from "../components/layouts/AdminLayout";
import FilmManagementPage from "../pages/pageAdmin/FilmManagementPage/FilmManagementPage";
import Admins from "../pages/pageAdmin/Admins";
import UserManagePage from "../pages/pageAdmin/UserManagerPage";

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
          path: "admins",
          element: <Admins />,
        },
        {
          path: "film",
          element: <FilmManagementPage />,
        },
        {
          path: "users",
          element: <UserManagePage />,
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
