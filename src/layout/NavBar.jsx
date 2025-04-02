import React from "react";
import profilepic from "../assets/profile.png";

const NavBar = () => {
  return (
    <div className="py-4 flex flex-wrap flex-col gap-2 items-start justify-start md:justify-between">
      <div className="flex items-center gap-2">
        <img src={profilepic} className="h-12" />
        <h1>Sören Pruul</h1>
      </div>

      <div className="py-1 flex flex-wrap flex-row md:items-center md:justify-center gap-2">
        <p className="">pruulsoren@gmail.com</p>•
        <a href="github.com/s9rka" target="_blank">
          Github
        </a>
        •
        <a
          href="https://www.linkedin.com/in/s%C3%B6ren-pruul-629672204/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default NavBar;
