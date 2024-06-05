import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Marquee from "./components/marquee/marquee";
import About from "./pages/about/about";
import Header from "./components/header/header";
import Projects from "./pages/project/Projects";
import ProjectDetails from "./pages/project/ProjectDetails";
import projectsData from "./pages/project/data.json";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/final-project/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects data={projectsData} />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails data={projectsData} />}
          />
        </Routes>
      </div>
      <Marquee />
    </Router>
  );
}

export default App;
