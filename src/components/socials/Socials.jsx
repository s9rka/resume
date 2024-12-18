import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Socials = () => {
  return (
    <div className="flex gap-1">
      <a className="text-stone-800 p-3 bg-light_50 hover:bg-stone-200 rounded" href="https://github.com/s9rka">
        <GitHubLogoIcon />
      </a>

      <a className="text-blue-500 p-3 bg-light_50 hover:bg-stone-200 rounded" href="https://www.linkedin.com/in/s%C3%B6ren-pruul-629672204/">
        <LinkedInLogoIcon />
      </a>
    </div>
  );
};

export default Socials;
