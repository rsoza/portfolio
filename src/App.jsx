import "./css/index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes  />
    </BrowserRouter>
  );
}

export default App;
