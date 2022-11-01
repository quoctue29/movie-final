import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import HomeCarousel from "../molecules/HomeCarousel";
import HomeMenu from "../../pages/pageHome/HomeMenu";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HomeCarousel />
      <main className="main-content">
        <Outlet />
      </main>
      <HomeMenu />
      <Footer />
    </div>
  );
};

export default MainLayout;
