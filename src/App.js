import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Marquee from "./components/marquee/marquee";
import About from "./pages/About/About";
import Header from "./components/header/header";
import Project1 from "./pages/projects/project1";
import Project2 from "./pages/projects/project2";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/final-project" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
        </Routes>
      </div>
      <Marquee />
    </Router>
  );
}

export default App;
