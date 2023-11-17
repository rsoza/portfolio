import "./css/index.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import {storeVisitor} from './utils/Firestore';
import NameForm from './components/NameForm';

function App() {
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [username, setUsername] = useState("");

  const handleNameSubmit = (name) => {
    storeVisitor(name);
    setIsNameEntered(true);
    setUsername(name);
  };

  return (
    <BrowserRouter>
      {isNameEntered ? (
        <AnimatedRoutes username={username} />
      ) : (
        <NameForm onNameSubmit={handleNameSubmit} />
      )}
    </BrowserRouter>
  );
}

export default App;
