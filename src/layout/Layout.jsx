import React from "react";
import NavBar from "./NavBar";
import watermark from "../assets/watermark.svg";

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-50/80 w-full mx-auto p-2 sm:max-w-3xl sm:p-4">
      <NavBar />
      {children}
      <footer className="flex items-center justify-center my-12">
        <img src={watermark} />
      </footer>
    </div>
  );
};

export default Layout;
