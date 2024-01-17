import "./css/index.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import { storeVisitor } from "./utils/Firestore";
import NameForm from "./components/NameForm";

function App() {
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [username, setUsername] = useState("");

  const handleNameSubmit = (name) => {
    storeVisitor(name);
    if (name.toLowerCase().includes("meow") || name.toLowerCase() === "no") {
      if (name.toLowerCase().includes("meow")) {
        window.alert("meow meow meow meow 🐈");
        window.alert("Long time no talk");
        window.alert("How's it going?");
      }
      setIsNameEntered(false);
    } else {
      setIsNameEntered(true);
      setUsername(name);
    }
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
