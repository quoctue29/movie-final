import React from "react";
import { Outlet } from "react-router-dom";

const OurLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default OurLayout;
