import React from "react";
import Layout from "./Layout";
import WorkExperience from "../components/experience/WorkExperience";
import Education from "../components/education/Education";
import AdditionalEd from "../components/education/AdditionalEd";
import Projects from "../components/projects/Projects";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
      <WorkExperience />
      <Education />
      <AdditionalEd />
      <Projects />
    </Layout>
  );
};

export default CV;
