import React from "react";
import { useTranslation } from "react-i18next";

const WiseInterventions = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>
          <a
            href="https://www.err.ee/1063444/soren-pruul-tolgendusi-mudides-muutusteni"
            target="_blank"
          >
            {t("Article on Wise Interventions (in Estonian)")}
          </a>
        </h3>
        <p className="text-stone-600">2020</p>
      </div>

      <div className="mt-4 py-2 px-3 rounded-md w-3/4">
        <p>
          {t("A cousin to 'nudging,' wise interventions target core beliefs to foster lasting changes in behavior and well-being. Small yet crucial shifts in perspective hold the potential for profound, cumulative impact.")}
        </p>
      </div>

      <div className="flex gap-2 pt-3">
        <span>{t("Psychology")}</span>
        <span>{t("Behavioural Economics")}</span>
      </div>
    </div>
  );
};

export default WiseInterventions;
