import React from "react";
import {useTranslation} from 'react-i18next';

const PowerBIDashboard = () => {
  const {t} = useTranslation()
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3>
          <a href="https://grow.ee/en/teenused/arianaluutika/" target="_blank">
            {t("Grow Finance Power BI dashboard")}
          </a>
        </h3>
        <p className="text-stone-600">2024</p>
      </div>

      <div className="mt-4 py-2 px-3 rounded-md w-3/4">
        <p className="">
          {t("During the internship in Grow Solutions, we launched a business intelligence product for business owners and executives.")}
        </p>

        <p className="">
          {t("My contribution was to design and build the overall layout. While Power BI has limitations in design flexibility, its power and accessibility make it a strong and practical choice for data visualization.")}
        </p>
      </div>
      <div className="flex gap-2 pt-3">
        <span>UI</span>
        <span>Power BI</span>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
