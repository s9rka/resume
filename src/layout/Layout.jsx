import React from "react";
import NavBar from "./NavBar";
import watermark from "../assets/watermark.svg";
import SideBarContent from "../components/SideBarContent";

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-50/80 w-full mx-auto p-2 sm:max-w-5xl sm:p-4">
      <NavBar />
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        <main className="flex-1 order-1 lg:order-1">{children}</main>

        <aside className="w-full lg:w-80 h-fit order-2 lg:order-2 shadow-sidebar rounded-lg p-4 pb">
          <SideBarContent/>
        </aside>
      </div>

      <footer className="flex items-center justify-center my-12">
        <img src={watermark} alt="watermark" />
      </footer>
    </div>
  );
};

export default Layout;
