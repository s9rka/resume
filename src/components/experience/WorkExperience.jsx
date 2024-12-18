import React from "react";

const WorkExperience = () => {
  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">Work Experience</h1>

      <ul className="p-2 flex flex-col gap-2">
        <li>
          <div className="flex justify-between">
            <h3>Product Design Intern</h3>
            <p className="text-stone-600">2023 Nov - 2024 Jan</p>
          </div>
          <p>Grow Solutions</p>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>Restaurant Manager</h3>
            <p className="text-stone-600">2022 Dec - 2023 Oct</p>
          </div>
          <p>Restaurant Kaerajaan</p>
          <p className="w-3/4">
            Responsible for running a fast-paced restaurant in Tallinn Town Hall
            Square
          </p>
        </li>
        <li>
        <div className="flex justify-between">
        <h3>Freelance Web Developer</h3>
        <p className="text-stone-600">2022 - now</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
