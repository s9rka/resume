import React from "react";
import Layout from "./layout/Layout";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import watermark from "./assets/watermark.svg";


const CV = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang); // Dynamically set language
    }
  }, [lang, i18n]);
  
  return (
    <Layout>
            <img src={watermark} alt="watermark" className="h-12" />

      <Experience />
      <Education />
    </Layout>
  );
};

export default CV;
