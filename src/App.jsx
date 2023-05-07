import "./css/Style.css";
import Home from "./pages/Home";
import DarkMode from "./utils/DarkMode";
import React, { useState, useEffect } from "react";
import { Flex, Box, Spacer } from "@chakra-ui/layout";
import Navbar from "./pages/Navbar";

function App() {
  const [windowDimension, detectHW] = useState({
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
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  });

  const height = windowDimension.winHeight - 70;
  const width = windowDimension.winWidth - 60;
  console.log(windowDimension);

  return (
    <>
    <div className="top-blur"/>
    <div className="bottom-blur" />
      <div className="container">
        <DarkMode />
        <div className="content" style={{ width: width, height: height }}>
          <Flex>
            <Box>
              <Navbar />
            </Box>
            <Spacer />
            <Box
            bottom='10%'
            right='5%'
            position='fixed'
            >
              <Home />
            </Box>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default App;
