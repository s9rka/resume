import React from "react";
import PowerBIDashboard from "./PowerBIDashboard";
import PromptingPresentation from "./PromptingPresentation";
import Aurelius from "./Aurelius";
import WiseInterventions from "./WiseInterventions";

const Projects = () => {
  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">Projects</h1>
      <ul className="p-2 flex flex-col gap-2">
        <li>
          <PowerBIDashboard />
        </li>
        <li>
          <PromptingPresentation />
        </li>
        <li>
          <Aurelius />
        </li>
        <li>
          <WiseInterventions />
        </li>
      </ul>
    </div>
  );
};

export default Projects;
