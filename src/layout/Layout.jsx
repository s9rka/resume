import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-50/80 max-w-3xl mx-auto p-4">
      <NavBar/>
      {children}
    </div>
  );
};

export default Layout;
