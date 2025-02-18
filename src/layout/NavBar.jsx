import React from "react";

const NavBar = () => {
  return (
    <div className="py-2 text-center">
      <h1>Sören Pruul</h1>
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
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default NavBar;
