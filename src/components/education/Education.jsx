import React from "react";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="py-2 flex flex-col">
      <h1 className="pt-2">{t("Education")}</h1>
      <ul className="p-2 flex flex-col gap-2">
        <li>
          <div className="flex justify-between">
            <h3>Kood/Jõhvi</h3>
            <p className="text-stone-600">2024 - {t("now")}</p>
          </div>
          <p>{t("Skills for becoming Full Stack Developer")}</p>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>{t("University of Tartu")}</h3>
            <p className="text-stone-600">2017 - 2020</p>
          </div>
          <p>{t("Psychology Major (Social sciences)")}</p>
          <a
            href="https://dspace.ut.ee/server/api/core/bitstreams/bee25d41-3118-48d7-886d-08aa7e59cea5/content"
            target="_blank"
          >
            {t("Final Thesis")}
          </a>
        </li>
        <li>
          <div className="flex justify-between">
            <h3>{t("Tallinn French School")}</h3>
            <p className="text-stone-600">2005 - 2017</p>
          </div>
          <p>{t("Primary and Secondary school")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
