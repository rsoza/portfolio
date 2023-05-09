import "./css/index.css";
import DarkMode from "./utils/DarkMode";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import { motion } from "framer-motion";
import Navbar from "./utils/Navbar";

function App() {
  return (
    <BrowserRouter>
      <motion.div
        id="Container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
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
      <DarkMode />
      <Navbar />

      <main className="content" id="Content" data-scroll="area">
        <div
          className="content_inner"
          data-scroll="target"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <AnimatedRoutes />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
