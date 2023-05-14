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
          <span>of the Coast Guard to</span>
          <span>complete a CS degree at</span>
          <span>Wichita State University. </span>
          <span>I am known for being</span>
          <span>a student, problem </span>
          <span>solver, and self-taught </span>
          <span>developer. Currently,</span>
          <span>pursuing a position in</span>
          <span>Software Development</span>
          <span>or Cloud Engineering as </span>
          <span>soon as I graduate in</span>
          <span>December 2023.</span>
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
