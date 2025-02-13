import React from "react";
import { useTranslation } from "react-i18next";

const Aurelius = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>
          <a href="https://www.aurelius.ee/" target="_blank">{t("Aurelius legal services website")}</a>
        </h3>
        <p className="text-stone-600">2022</p>
      </div>

      <div className="mt-4 py-2 px-3 rounded-md w-3/4">
        <p>{t("My first full-stack project, made with React.")}</p>
      </div>
      <div className="flex gap-2 pt-3">
        <span>React</span>
        <span>Web Dev</span>
      </div>
    </div>
  );
};

export default Aurelius;
