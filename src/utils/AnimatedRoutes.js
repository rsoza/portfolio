import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../css/index.css";

import Home from "../pages/Home";
import Info from "../pages/Info";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import DarkMode from "../components/DarkMode";
import Navbar from "./Navbar";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
          <div id="Container">
            <div className="air air1"></div>
            <div className="air air2"></div>
            <div className="air air3"></div>
            <div className="air air4"></div>
          </div>
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
      <DarkMode />
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
