import "./css/Style.css";
import Home from "./pages/Home";
import DarkMode from "./utils/DarkMode";
import React, {useState, useEffect} from "react";

function App() {
  const [windowDimension, detectHW] = useState ({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return() => {
      window.removeEventListener('resize', detectSize);
    }
  });

  const height = windowDimension.winHeight - 50;
  console.log(windowDimension);

  return (
    <>
      <div className="container"
      >
        <DarkMode />

        <div className="content"
        style={{width:windowDimension.winWidth, height: height}}>
          <Home />
        <div className="about">hello</div>
        </div>
      </div>
    </>
  );
}

export default App;
