import "../css/pages.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
    initial={{ opacity: 0,}}
    animate={{ opacity: 1, transition: {delay:0.5} }}
    exit={{ opacity: 0 }}
    >
      <div className="home">
          <p className="home_aboutme">
            <span>Originally from</span>
            <span>Miami, Florida,</span>
            <span>moved to Kansas</span>
            <span>in early 2021 to</span>
            <span>complete my degree</span>
            <span>at Wichita State</span>
            <span> University. Quickly</span>
            <span>learned that the</span>
            <span>possibilities in</span>
            <span>Computer Science</span>
            <span>are endless. Currently</span>
            <span>pursuing a position in</span>
            <span>Software Development</span>
            <span>or Cloud Engineering.</span>
          </p>
      </div>
        </motion.div>
  );
}

export default Home;
