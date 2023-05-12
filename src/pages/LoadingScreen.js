import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
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
      id="Enter"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={overlayTransition}
    >
      <Center h="100vh">

        <Text className="Enter _t1">Rebecca Soza</Text> |Portfolio
        </Center>
    </motion.div>
  );
};

export default LoadingScreen;
