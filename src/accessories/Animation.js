import { motion } from "framer-motion";



const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", justifyContent:'flex-end', fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
          >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const AnimatedTextBlock = ({ text }) => {
  const sentences = text.split(/[.!?]+/);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.7, delayChildren: 0.7 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", justifyContent:'flex-end', fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {sentences.map((sentence, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ marginRight: "5px" }}
        >
          {sentence.trim()}{index < sentences.length - 1 && '.'}
        </motion.span>
      ))}
    </motion.div>
  );
};




export { AnimatedTextWord, AnimatedTextBlock};