import { Route, Routes, useParams, useLocation } from "react-router-dom";
import "./App.css";
import "./i18n";
import CV from "./CV";

function App() {
  

  return (
    <div>      
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