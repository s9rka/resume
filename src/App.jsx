import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./i18n";
import CV from "./CV";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </div>
  );
}

export default App;
