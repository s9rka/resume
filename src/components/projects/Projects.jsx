import React from "react";
import PowerBIDashboard from "./PowerBIDashboard";
import PromptingPresentation from "./PromptingPresentation";
import Aurelius from "./Aurelius";
import WiseInterventions from "./WiseInterventions";
import {useTranslation} from 'react-i18next';


const Projects = () => {
  const { t} =useTranslation(); 
  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">{t("Projects")}</h1>
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
