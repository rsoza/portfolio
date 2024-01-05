import "../css/pages.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
    >
      <div className="home">
        <p className="home_aboutme">
          <span>Originally from Miami,</span>
          <span>Florida, moved to Kansas</span>
          <span>in early 2021 after completing</span>
          <span>four years in the Coast Guard</span>
          <span>to completing a CS degree at</span>
          <span>Wichita State University. </span>
          <span>This portfolio was insprired</span>
          <span>with the idea of having a </span>
          <span>virtual business card made</span>
          <span>by me using Firebase and </span>
          <span>React JS. Currently,</span>
          <span>pursuing a position</span>
          <span>in Software Development.</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
