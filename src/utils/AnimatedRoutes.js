import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "../css/index.css";

import Home from "../pages/Home";
import Info from "../pages/Info";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ProjectDetailsPage from "../components/ProjectDetail";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);

  return (
    <AnimatePresence>
      {location.pathname === "/" ||
      location.pathname === "/info" ||
      location.pathname === "/info/" ||
      location.pathname === "/projects" ||
      location.pathname === "/projects/" ||
      location.pathname === "/contact/" ||
      location.pathname === "/contact" ? (
        <>
          <motion.div
            id="Container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
          >
            <div className="air air1"></div>
            <div className="air air2"></div>
            <div className="air air3"></div>
            <div className="air air4"></div>
          </motion.div>
          <div className="borders" id="Borders">
            <div className="border_top" />
            <div className="border_bot" />
          </div>
          <div className="frame" id="Frame">
            <div className="frame_border frame_left" />
            <div className="frame_border frame_right" />
            <div className="frame_border frame_top" />
            <div className="frame_border frame_bot" />
          </div>
          <Navbar />
        </>
      ) : (
        <motion.div
          id="Container"
        ></motion.div>
      )}
      <DarkMode />

      <main className="content" id="Content" data-scroll="area">
        <div
          className="content_inner"
          data-scroll="target"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route
              exact
              path="/projects/:name"
              element={<ProjectDetailsPage />}
            />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
