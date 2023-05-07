import React from "react";
import "../css/Style.css";
import { motion } from "framer-motion";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleThemeDark = (e) => {
    if (e.target.checked) setDarkMode();
  };
  const toggleThemeLight = (e) => {
    if (e.target.checked) setLightMode();
  };

  return (
    <div className="dark_mode">
      <motion.label 
      className="light_mode_label"
      htmlFor="darkmode-toggle"
      whileHover={{ scale: 0.9 }}
      >
        <motion.input
          className="dark_mode_input"
          value="option2"
          name="mycheck"
          type="radio"
          id="darkmode-toggle"
          onChange={toggleThemeLight}
          defaultChecked={selectedTheme === "light"}
        />
        <motion.span whileHover={{ scale: 0.9 }}>LIGHT</motion.span>
      </motion.label>
      <motion.label 
      className="dark_mode_label" 
      htmlFor="darkmode-toggle"
      whileHover={{ scale: 0.9 }}
      >
        <motion.input
          className="dark_mode_input"
          type="radio"
          id="darkmode-toggle"
          onChange={toggleThemeDark}
          name="mycheck"
          value="option1"
          defaultChecked={selectedTheme === "dark"}
        />
        <motion.span whileHover={{ scale: 0.9 }}>DARK</motion.span>
      </motion.label>
    </div>
  );
};

export default DarkMode;
