import React from "react";
import profilepic from "../assets/profile.png";

const NavBar = () => {
  return (
    <div className="py-4 flex flex-row gap-2 items-center justify-start">
      <div className="flex items-center gap-2">
        <img src={profilepic} className="h-12" />
        <h1>Sören Pruul</h1>•
      </div>

      <div className="py-1 flex flex-row items-center justify-center gap-2">
        <p>pruulsoren@gmail.com</p>•
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
