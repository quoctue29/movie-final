import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";

const TicketLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default TicketLayout;
