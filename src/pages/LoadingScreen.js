import {Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const selectedTheme = localStorage.getItem("selectedTheme");
  console.log(selectedTheme)


  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const overlayTransition = {
    duration: 0.5,
    ease: "easeInOut",
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
        <Text 
        className="Enter _t1">Rebecca Soza</Text> |Portfolio
        </Center>
    </motion.div>
  );
};

export default LoadingScreen;
