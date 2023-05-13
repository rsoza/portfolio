import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Contact() {
  const emailAddress = "rsoza02@outlook.com";

  function handleClick() {
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
        <div className="home info">
          <p className="info_section">
            Email:
            <a href="#email" className="email" onClick={handleClick}>
              rsoza02@outlook.com
            </a>
          </p>
          <p className="info_section">
<Center>

              Connect with me:
      
           

            <a
              href="https://www.linkedin.com/in/rebecca-soza-94491325a/"
              className="email"
              >
              LinkedIn
            </a>{" "}
            /
            <a href="https://github.com/rsoza" className="email">
              GitHub
            </a>{" "}
            /
            <a href="https://discord.com/users/rebecca#4142" className="email">
              Discord
            </a>
                </Center>
     
          </p>
        </div>
    </motion.div>
  );
}

export default Contact;
