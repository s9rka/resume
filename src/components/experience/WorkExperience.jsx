import React from "react";
import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">{t("Work Experience")}</h1>

      <ul className="p-2 flex flex-col gap-2">
      <li>
          <div className="flex justify-between">
            <h3>{t(
              "Software Engineer"
            )}</h3>
            <p className="text-stone-600">2025 {t("Feb")} - {t("now")}</p>
          </div>
          <p>{t("Qbit Software Solutions")}</p>
          <p className="w-3/4">
            {t(
              "Developing a platform for sports tournament management"
            )}
          </p>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>{t("Product Design Intern")}</h3>
            <p className="text-stone-600">2023 {t("Nov")} - 2024 {t("Jan")}</p>
          </div>
          <p>Grow Solutions</p>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>{t("Restaurant Manager")}</h3>
            <p className="text-stone-600">2022 {t("Dec")} - 2023 {t("Oct")}</p>
          </div>
          <p>{t("Restaurant Kaerajaan")}</p>
          <p className="w-3/4">
            {t(
              "Responsible for running a fast-paced restaurant in Tallinn Town Hall Square"
            )}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
