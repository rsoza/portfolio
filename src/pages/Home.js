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
          <span>in early 2021 after</span>
          <span>completing four years</span>
          <span>in the Coast Guard to</span>
          <span>completing a CS degree at</span>
          <span>Wichita State University. </span>
          <span>This virtual business</span>
          <span>card was made using </span>
          <span>Firebase and React JS</span>
          <span>by me. Currently,</span>
          <span>pursuing a position in</span>
          <span>Software Development</span>
          <span>or AI Engineer as </span>
          <span>soon as I graduate in</span>
          <span>December 2023.</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
