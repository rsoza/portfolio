import { Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AnimatedTextWord } from "../accessories/Animation";
import pic from "./pic.png";
import cpe_entry from "./cpe-20-01-cpe-c-certified-entry-level-programmer.png";

function Contact() {
  const emailAddress = "rsoza02@outlook.com";

  function handleClick() {
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: 0.5, duration: 1 },
        }}
        exit={{ opacity: 0, y: 100 }}
        style={{ position: "relative", height: "95.5vh", zIndex: 4 }}
      >
        <img src={pic} alt="profile" className="profile" />
      </motion.div>
      <div className="info">
      <img src={cpe_entry} alt="cpe_entry" className="cpe_entry" />
        <AnimatedTextWord text={"Hello,"} />
        <p>lets get to know each other!</p>
        <p className="info_section">
          <Center>
            Connect:
            <a href="https://github.com/rsoza" className="email _space">
              GitHub
            </a>{" "}
            /
            <a
              href="https://discord.com/users/rebecca#4142"
              className="email _space"
            >
              Discord
            </a>{" "}
            /
            <a href="https://medium.com/@bsoza93" className="email">
              Medium
            </a>
          </Center>
        </p>
        <p className="info_section">
          Email:
          <a href="#email" className="email" onClick={handleClick}>
            rsoza02@outlook.com
          </a>
        </p>
        <motion.div
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 1.02 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <a href="files/resume.pdf" title="Download CV">
            <Text className="smallHeading-thin">cv</Text>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
