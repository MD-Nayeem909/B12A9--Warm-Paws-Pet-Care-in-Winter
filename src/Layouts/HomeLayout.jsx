import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-300.86px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
