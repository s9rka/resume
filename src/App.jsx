import { Route, Routes, useParams, useLocation } from "react-router-dom";
import "./App.css";
import "./i18n";
import CV from "./CV";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Language-aware CV component wrapper
function CVWithLanguage() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    if (lang === "et") {
      i18n.changeLanguage("et");
      console.log("Setting language to Estonian from URL parameter");
    } else {
      i18n.changeLanguage("en");
      console.log("Setting language to English from URL parameter");
    }
  }, [lang, i18n]);
  
  return <CV />;
}

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  // Add language switcher buttons
  const switchLanguage = (lang) => {
    const newPath = lang === "et" ? "/et" : "/";
    window.location.href = newPath;
  };
  
  // Log current path to help debug
  useEffect(() => {
    console.log("Current path:", location.pathname);
    console.log("Current language:", i18n.language);
  }, [location, i18n.language]);

  return (
    <div>
      {/* Language switcher buttons */}
      
      
      <Routes>
        {/* Default English route */}
        <Route path="/" element={<CV />} />
        
        {/* Estonian route with language parameter */}
        <Route path="/:lang" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;