import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Info from "../pages/Info";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
// import ProjectDetailsPage from "../components/Project";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/projects/:name" element={<ProjectDetailsPage />} /> */}
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
