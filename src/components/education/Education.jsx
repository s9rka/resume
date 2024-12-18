import React from "react";

export const Education = () => {
  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">Education</h1>
      <ul className="p-2 flex flex-col gap-2">
        <li>
          <div className="flex justify-between">
            <h3>Kood/Jõhvi</h3>
            <p className="text-stone-600">2024 - now</p>
          </div>
          <p>Skills for becoming Full Stack Developer</p>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>University of Tartu</h3>
            <p className="text-stone-600">2017 - 2020</p>
          </div>
          <p>Psychology Major (Social sciences)</p>
          <a href="https://dspace.ut.ee/server/api/core/bitstreams/bee25d41-3118-48d7-886d-08aa7e59cea5/content" target="_blank">
            Final Thesis
          </a>
        </li>
        <li>
        <div className="flex justify-between">
        <h3>Tallinn French School</h3>
        <p className="text-stone-600">2005 - 2017</p>
          </div>
          <p>Primary and Secondary school</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
