import React from 'react'
import { useTranslation } from "react-i18next";

const AdditionalEd = () => {
  const {t} = useTranslation();
  return (
    <div className='py-2'>
      <h1 className='pt-2'>{t("Additional Courses")}</h1>
      <ul className="p-2 flex flex-col gap-2">
        <li>
          {t("Completed UX Estonia UX Design Course")} -{" "}
          <a href="https://drive.google.com/file/d/1Y7B7tqQmATf0uZpyBqW9X7heWnm8ER8e/view" target="_blank">
            {t("Certificate")}
          </a>
        </li>
        <li>
          {t("Completed Javascript & React - Zero to Specialist Intensive Course")} -{" "}
          <a href="https://drive.google.com/file/d/1HBx16K_FoS0L8szLyY0Apw-fvrWck3Qh/view" target="_blank">
          {t("Certificate")}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AdditionalEd
