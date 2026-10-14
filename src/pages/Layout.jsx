import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FCFDFB]">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;