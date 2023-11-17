import React, { useState } from "react";
import {Center, Input} from "@chakra-ui/react";
import { motion } from "framer-motion";

function NameForm({ onNameSubmit }) {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const [name, setName] = useState("");
  
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const overlayTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
        onNameSubmit(name);
    }
  };


  return (
    <motion.div
    className="Enter"
    variants={overlayVariants}
    initial="hidden"
    animate="visible"
    exit="hidden"
    transition={overlayTransition}
  >
    <Center h="100vh" 
    bg={selectedTheme === 'light' ? 'hsl(0, 0%, 88%)' : "hsl(0, 0%, 0%)"}
    color={selectedTheme === 'dark' ? 'hsl(0, 0%, 90%)' : "hsl(0, 0%, 8%)"}
    >
    <form onSubmit={handleSubmit}>
        <Input
          className="Enter _t1"
          variant='flushed'
          placeholder=' Please enter your name'
          size='xs'
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={15}
          requi
        />
    </form>
    </Center>
    </motion.div>
  );
}

export default NameForm;