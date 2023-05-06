import React from "react";
import '../css/Style.css';

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
        <label className="dark_mode_label" for="darkmode-toggle">
      <input
        className="dark_mode_input"
        type="radio"
        id="darkmode-toggle"
        onChange={toggleThemeDark}
        name="mycheck"
        value="option1"
        defaultChecked={selectedTheme === "dark"}
        />
        dark
      </label>
      <label className="light_mode_label" for="darkmode-toggle">
      <input
        className="dark_mode_input"
        value="option2"
        name="mycheck"
        type="radio"
        id="darkmode-toggle"
        onChange={toggleThemeLight}
        defaultChecked={selectedTheme === "light"}
      />
        light
      </label>
    </div>
  );
};

export default DarkMode;
