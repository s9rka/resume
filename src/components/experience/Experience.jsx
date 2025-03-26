import React from "react";
import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <section className="py-2 flex flex-col">
      <h1 className="pt-2">{t("Experience")}</h1>

      <ul className="p-2 flex flex-col gap-2">
        <li>
          <div className="flex justify-between pb-2">
            <div className="flex gap-2 md:items-center flex-col md:flex-row  ">
              <h3>{t("Software Engineer")}</h3>{" "}
              <p className="hidden md:block">|</p>
              <p className="">{t("Qbit Software Solutions")}</p>
            </div>
            <p className="text-stone-600 text-right">
              2025 {t("Feb")} - {t("now")}
            </p>
          </div>
          <ul className="pl-4">
            <li className="bullet">
              {t(
                "Developing a platform for creating, managing and monitoring sports tournaments."
              )}
            </li>
            <li className="bullet">
              {t("Building the frontend with modern React stack.")}
            </li>
            <li className="bullet">
              {t("Managing design system in Figma to ensure consistent UI.")}
            </li>
          </ul>
        </li>
        <li>
          <div className="flex justify-between pb-2">
            <div className="flex gap-2 md:items-center flex-col md:flex-row  ">
              <h3>{t("Product Design Intern")}</h3>{" "}
              <p className="hidden md:block">|</p> <p>Grow Solutions</p>
            </div>
            <p className="text-stone-600 text-right">
              2023 {t("Nov")} - 2024 {t("Jan")}
            </p>
          </div>
          <ul className="pl-4">
            <li className="bullet">
              {t(
                "Developed a financial dashboard for CEOs to monitor cash flow and critical business metrics."
              )}
            </li>
            <li className="bullet">
              {t(
                "Collaborated with a team (data engineer, financial analyst) to define product requirements and optimize user experience."
              )}
            </li>
            <li className="bullet">
              {t(
                "Leveraged Power BI template apps to create a reusable template."
              )}
            </li>
          </ul>
        </li>
        <li>
          <div className="flex justify-between pb-2">
            <div className="flex gap-2 md:items-center flex-col md:flex-row  ">
              <h3>{t("Restaurant Manager")}</h3>{" "}
              <p className="hidden md:block">|</p>
              <p className="">{t("Restaurant Kaerajaan")}</p>
            </div>
            <p className="text-stone-600 text-right">
              2022 {t("Dec")} - 2023 {t("Oct")}
            </p>
          </div>
          <ul className="pl-4">
            <li className="bullet">
              {t(
                "Managed daily operations of a 150-seat restaurant in Tallinn Old Town."
              )}
            </li>
            <li className="bullet">
              {t(
                "Maintained smooth operations between kitchen and service teams"
              )}
            </li>
            <li className="bullet">
              {t("Created marketing materials and job listings.")}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
