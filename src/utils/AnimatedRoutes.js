import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../css/index.css";
import { motion } from "framer-motion";

import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import DarkMode from "../components/DarkMode";
import Navbar from "./Navbar";
import LoadingScreen from "../pages/LoadingScreen";


function AnimatedRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const selectedTheme = localStorage.getItem("selectedTheme");
  console.log(selectedTheme)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div id="Container">
            <div className="air air1"></div>
            <div className="air air2"></div>
            <div className="air air3"></div>
            <div className="air air4"></div>
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
            <Route exact path="/projects" element={<Experience />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
