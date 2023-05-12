import "../css/pages.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <div className="home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
        >
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
            <span>are endless. I am</span>
            <span>pursuing a position in</span>
            <span>Software Development</span>
            <span>or Cloud Engineering.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
