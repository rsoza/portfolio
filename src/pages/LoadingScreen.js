import {Center, Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoadingScreen = ({username}) => {
  const selectedTheme = localStorage.getItem("selectedTheme");
  

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const overlayTransition = {
    duration: 2,
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
      bg={selectedTheme === 'light' || selectedTheme === null ? 'hsl(0, 0%, 88%)' : "hsl(0, 0%, 0%)"}
      color={selectedTheme === 'dark' ? 'hsl(0, 0%, 90%)' : "hsl(0, 0%, 8%)"}
      >
        <Stack spacing={3}>
          <Text className="Enter _t1">Welcome <strong>{username}</strong> to</Text>
          <Text className="Enter _t1">Rebecca Soza's <strong>Portfolio</strong></Text> 
          
        </Stack>
      </Center>
    </motion.div>
  );
};

export default LoadingScreen;
