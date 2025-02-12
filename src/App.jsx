import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n";
import CV from "./layout/CV";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<CV/>} />
      </Routes>
    </div>
  );
}

export default App;