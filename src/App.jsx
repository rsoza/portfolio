import "./css/index.css";
import DarkMode from "./utils/DarkMode";
import React, { useState } from "react";
import Navbar from "./pages/Navbar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import Contact from "./pages/Contact";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState('home');
  
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
    const links = document.querySelectorAll('a');
    let selectedLink;
    
    links.forEach(link => {
      link.classList.remove('_active');
    });

    if (navItem === '' || navItem === 'home') {
      selectedLink = document.querySelector('a[href="#"]');
      if (!selectedLink) {
        selectedLink = document.querySelector('a[href=""]');
      }
    } else {
      selectedLink = document.querySelector(`a[href="#${navItem}"]`);
    }

    if (selectedLink) {
      selectedLink.classList.add('_active');
    }
  };

  let mainContent;
  if (selectedNavItem === 'home') {
    mainContent = (<Home />);
  } else if (selectedNavItem === 'info') {
    mainContent = (<Info />);
  } else if (selectedNavItem === 'projects') {
    mainContent = (<Projects />);
  } else if (selectedNavItem === 'contact') {
    mainContent = (<Contact />);
  }

  return (
      <><div id="Container">
      {/* add background canvas here */}
    </div><div className="borders" id="Borders">
        <div className="border_top" />
        <div className="border_bot" />
      </div><div className="frame" id="Frame">
        <div className="frame_border frame_left" />
        <div className="frame_border frame_right" />
        <div className="frame_border frame_top" />
        <div className="frame_border frame_bot" />
      </div><DarkMode /><Navbar handleNavItemClick={handleNavItemClick} selectedNavItem={selectedNavItem} /><main className="content" id="Content" data-scroll="area">
        <div className="content_inner" data-scroll="target" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          {mainContent}
        </div>
      </main></>
  );
}

export default App;
