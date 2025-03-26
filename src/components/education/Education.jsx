import React from "react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation(); 
  return (
    <section className="py-2 flex flex-col">
      <h1 className="pt-2">{t("Education")}</h1>
      <ul className="p-2 flex flex-col gap-2">
        <li>
          <div className="flex justify-between pb-2">
            <h3>Kood/Jõhvi</h3>
            <p className="text-stone-600">2024 - {t("now")}</p>
          </div>
          <ul className="pl-4">
            <li className="bullet">
              {t("Developing multiple API servers and backend tools in Go.")}
            </li>{" "}
            <li className="bullet">
              {t("Building client applications with Typescript.")}
            </li>
            <li className="bullet">
              {t("Collaborating in teams on large-scale development projects.")}
            </li>
          </ul>
        </li>
        <li>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center pb-2">
              <h3>{t("University of Tartu")}</h3> |<p>{t("Psychology")}</p>
            </div>
            <p className="text-stone-600">2017 - 2020</p>
          </div>
          <ul className="pl-4">
            <li className="bullet">
              {t("Focused on cognitive psychology and behavioural economics.")}
            </li>
            <li className="bullet">
              {t("Wrote an")}{" "}
              <a
                href="https://www.err.ee/1063444/soren-pruul-tolgendusi-mudides-muutusteni"
                target="_blank"
              >
                {t("article on Wise Interventions (in Estonian)")}
              </a>{" "}
              {t("for general public.")}
            </li>
            <li className="bullet">
              <a
                href="https://dspace.ut.ee/server/api/core/bitstreams/bee25d41-3118-48d7-886d-08aa7e59cea5/content"
                target="_blank"
              >
                {t("Final Thesis")}
              </a>{" "}
              {t("investigates human decision-making through eye-tracking.")}
            </li>
          </ul>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>{t("Tallinn French School")}</h3>
            <p className="text-stone-600">2005 - 2017</p>
          </div>
          <p>{t("Primary and Secondary school")}</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
