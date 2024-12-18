import React from "react";
import profilepic from "../assets/profile.png";
import Socials from "../components/socials/Socials";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-4 my-2">
      <div className="flex items-center gap-3">
        <img className="h-20" src={profilepic} />
        <div className="flex flex-col gap-1">
          <h3>Sören Pruul</h3>
          <p>pruulsoren@gmail.com</p>
        </div>
      </div>
      <Socials/>
    </div>
  );
};

export default NavBar;
