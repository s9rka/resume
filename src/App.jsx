import "./App.css";
import WorkExperience from "./components/experience/WorkExperience";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Layout from "./layout/Layout";
import AdditionalEd from "./components/education/AdditionalEd";

function App() {
  return (
    <div>
      <Layout>
        <WorkExperience />
        <Education />
        <AdditionalEd />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
